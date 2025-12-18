import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/client/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Define routes to match App.tsx routing
const routesToPrerender = [
  // Main pages
  '/',
  '/smart-film',
  '/paint-protection',
  '/residential-tinting',
  '/commercial-tinting',
  '/automotive-tinting',
  '/ceramic-coating',
  '/security-film',
  '/motorized-patio-screens',
  
  // Blog pages
  '/blog',
  '/blog/texas-window-tint-laws-2024',
  '/blog/benefits-ceramic-window-tint',
  '/blog/home-window-tinting-energy-savings',
  '/blog/xpel-vs-other-ppf-brands',
  '/blog/motorized-patio-screens-outdoor-living',
  '/blog/commercial-window-tinting-benefits-business',
  
  // Location pages
  '/locations/dallas',
  '/locations/plano',
  '/locations/frisco',
  '/locations/mckinney',
  '/locations/fort-worth',
  '/locations/arlington',
  '/locations/irving',
  '/locations/garland',
  '/locations/grand-prairie',
  '/locations/richardson',
  '/locations/allen',
  '/locations/carrollton',
  '/locations/lewisville',
  '/locations/denton',
  '/locations/flower-mound',
  '/locations/the-colony',
  '/locations/little-elm',
  '/locations/prosper',
  '/locations/mesquite',
  '/locations/rockwall',
  '/locations/rowlett',
  '/locations/wylie',
  '/locations/murphy',
  '/locations/sachse',
  '/locations/coppell',
  '/locations/grapevine',
  '/locations/southlake',
  '/locations/greenville',
  '/locations/caddo-mills',
  '/locations/commerce',
]

;(async () => {
  for (const url of routesToPrerender) {
    const appHtml = render(url);
    const html = template.replace(`<!--app-html-->`, appHtml)

    // Determine file path
    const filePath = `dist${url === '/' ? '/index' : url}.html`
    const absolutePath = toAbsolute(filePath)
    const dir = path.dirname(absolutePath)
    
    // Ensure directory exists before writing
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
    
    fs.writeFileSync(absolutePath, html)
    console.log('pre-rendered:', filePath)
  }
})()
