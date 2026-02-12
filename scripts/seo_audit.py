#!/usr/bin/env python3
import os, re, json, hashlib

def find_all_html(root):
    out=[]
    for dp, dn, fn in os.walk(root):
        for f in fn:
            if f.endswith('.html'):
                out.append(os.path.join(dp,f))
    return sorted(out)

def slug_from_path(p, root):
    rel=os.path.relpath(p, root)
    if rel.endswith('index.html'):
        rel=rel[:-10]
    if rel.endswith('.html'):
        rel=rel[:-5]
    rel=rel.replace('\\','/')
    if not rel.startswith('/'):
        rel='/' + rel
    if rel=='/index':
        rel='/'
    return rel

def extract(html):
    def m(pattern, flags=re.I|re.S):
        mm=re.search(pattern, html, flags)
        return mm.group(1).strip() if mm else None

    title=m(r"<title[^>]*>(.*?)</title>")
    desc=m(r"<meta[^>]+name=['\"]description['\"][^>]+content=['\"](.*?)['\"][^>]*>")
    canonical=m(r"<link[^>]+rel=['\"]canonical['\"][^>]+href=['\"](.*?)['\"][^>]*>")
    robots=m(r"<meta[^>]+name=['\"]robots['\"][^>]+content=['\"](.*?)['\"][^>]*>")

    # H1s: naive but good enough for audits
    h1s=[re.sub(r"\s+"," ",re.sub(r"<.*?>","",x)).strip() for x in re.findall(r"<h1[^>]*>(.*?)</h1>", html, re.I|re.S)]
    h1s=[h for h in h1s if h]

    og_title=m(r"<meta[^>]+property=['\"]og:title['\"][^>]+content=['\"](.*?)['\"][^>]*>")
    og_desc=m(r"<meta[^>]+property=['\"]og:description['\"][^>]+content=['\"](.*?)['\"][^>]*>")
    og_url=m(r"<meta[^>]+property=['\"]og:url['\"][^>]+content=['\"](.*?)['\"][^>]*>")

    # JSON-LD blocks count
    jsonld=len(re.findall(r"<script[^>]+type=['\"]application/ld\+json['\"][^>]*>", html, re.I))

    return {
        'title': title,
        'description': desc,
        'canonical': canonical,
        'robots': robots,
        'h1_count': len(h1s),
        'h1': h1s[:3],
        'og_title': og_title,
        'og_description': og_desc,
        'og_url': og_url,
        'jsonld_count': jsonld,
    }

def main():
    root='dist'
    files=find_all_html(root)
    pages=[]
    for f in files:
        with open(f,'r',encoding='utf-8',errors='ignore') as fh:
            html=fh.read()
        url=slug_from_path(f, root)
        data=extract(html)
        data['path']=f
        data['url']=url
        pages.append(data)

    # aggregate issues
    issues={
        'missing_title':[],
        'missing_description':[],
        'missing_canonical':[],
        'missing_h1':[],
        'multi_h1':[],
        'missing_og':[],
        'canonical_mismatch':[],
        'title_too_short':[],
        'title_too_long':[],
        'desc_too_short':[],
        'desc_too_long':[],
    }

    for p in pages:
        t=p.get('title') or ''
        d=p.get('description') or ''
        c=p.get('canonical')

        if not p.get('title'): issues['missing_title'].append(p['url'])
        if not p.get('description'): issues['missing_description'].append(p['url'])
        if not p.get('canonical'): issues['missing_canonical'].append(p['url'])
        if p.get('h1_count',0)==0: issues['missing_h1'].append(p['url'])
        if p.get('h1_count',0)>1: issues['multi_h1'].append(p['url'])
        if not (p.get('og_title') and p.get('og_description') and p.get('og_url')):
            issues['missing_og'].append(p['url'])

        if c and p['url']!='/' and (not c.endswith(p['url'])):
            issues['canonical_mismatch'].append({'url':p['url'],'canonical':c})
        if len(t)>0 and len(t)<25: issues['title_too_short'].append({'url':p['url'],'title':t})
        if len(t)>65: issues['title_too_long'].append({'url':p['url'],'title':t})
        if len(d)>0 and len(d)<70: issues['desc_too_short'].append({'url':p['url'],'description':d})
        if len(d)>160: issues['desc_too_long'].append({'url':p['url'],'description':d})

    # duplicates
    def bucket(key):
        b={}
        for p in pages:
            v=(p.get(key) or '').strip()
            if not v: continue
            h=hashlib.md5(v.encode('utf-8')).hexdigest()
            b.setdefault(h, {'value':v, 'urls':[]})['urls'].append(p['url'])
        return [v for v in b.values() if len(v['urls'])>1]

    duplicates={
        'title': bucket('title'),
        'description': bucket('description'),
        'canonical': bucket('canonical'),
    }

    report={
        'page_count': len(pages),
        'issues_summary': {k: (len(v) if isinstance(v,list) else None) for k,v in issues.items()},
        'issues': issues,
        'duplicates': {
            'title': sorted(duplicates['title'], key=lambda x: len(x['urls']), reverse=True)[:50],
            'description': sorted(duplicates['description'], key=lambda x: len(x['urls']), reverse=True)[:50],
            'canonical': sorted(duplicates['canonical'], key=lambda x: len(x['urls']), reverse=True)[:50],
        }
    }

    os.makedirs('audit', exist_ok=True)
    with open('audit/seo_report.json','w',encoding='utf-8') as fh:
        json.dump(report, fh, indent=2)

    print(json.dumps(report['issues_summary'], indent=2))
    print('wrote audit/seo_report.json')

if __name__=='__main__':
    main()
