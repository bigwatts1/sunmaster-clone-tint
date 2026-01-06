import { Helmet } from "react-helmet";
import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, User, Share2 } from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactLink from "@/components/ContactLink";
import { getBlogPostBySlug, blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const canonicalUrl = `https://sunmastersautoandshades.com/blog/${post.slug}`;

  return (
    <>
      <Helmet>
        <title>{post.title} | Sunmasters Window Tinting Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={`${post.category}, window tinting, Dallas, DFW, ${post.title.toLowerCase()}`} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.excerpt,
            "author": {
              "@type": "Organization",
              "name": "Sunmasters Window Tinting and Shades"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Sunmasters Window Tinting and Shades",
              "url": "https://sunmastersautoandshades.com"
            },
            "datePublished": post.date,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": canonicalUrl
            }
          })}
        </script>
      </Helmet>

      <TopBar />
      <Navbar />

      {/* Breadcrumb */}
      <section className="py-4 bg-secondary border-b border-border">
        <div className="container mx-auto px-4">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              {post.category}
            </span>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-muted-foreground text-sm flex-wrap">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-a:text-primary">
              <div 
                dangerouslySetInnerHTML={{ 
                  __html: post.content
                    .replace(/## /g, '<h2 class="text-2xl font-bold mt-8 mb-4">')
                    .replace(/### /g, '<h3 class="text-xl font-bold mt-6 mb-3">')
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\n\n/g, '</p><p class="mb-4">')
                    .replace(/- (.*?)(?=\n|$)/g, '<li class="ml-4">$1</li>')
                }} 
              />
            </article>
            
            {/* Share */}
            <div className="mt-12 pt-8 border-t border-border flex items-center justify-between flex-wrap gap-4">
              <div className="text-muted-foreground text-sm">
                Share this article:
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(canonicalUrl)}&text=${encodeURIComponent(post.title)}`, '_blank')}
                >
                  Twitter
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(canonicalUrl)}`, '_blank')}
                >
                  Facebook
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(canonicalUrl)}&title=${encodeURIComponent(post.title)}`, '_blank')}
                >
                  LinkedIn
                </Button>
              </div>
            </div>
            
            {/* CTA Box */}
            <div className="mt-12 bg-secondary border border-border rounded-lg p-8 text-center">
              <h3 className="font-heading font-bold text-foreground text-2xl mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-muted-foreground mb-6">
                Contact Sunmasters for a free estimate on window tinting, paint protection, or ceramic coating.
              </p>
              <ContactLink className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading uppercase tracking-wider">
                Get Free Estimate
              </ContactLink>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-foreground text-2xl mb-8">
            Related Articles
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                to={`/blog/${relatedPost.slug}`}
                className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors group"
              >
                <div className="bg-primary/10 h-32 flex items-center justify-center">
                  <span className="text-primary font-heading font-bold text-xl opacity-20">
                    SUNMASTERS
                  </span>
                </div>
                <div className="p-4">
                  <span className="text-primary text-xs font-medium uppercase tracking-wider">
                    {relatedPost.category}
                  </span>
                  <h3 className="font-heading font-bold text-foreground text-base mt-1 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <span className="text-muted-foreground text-xs">
                    {relatedPost.readTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BlogPost;
