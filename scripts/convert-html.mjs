import fs from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve('theme-source')
const OUT = path.resolve('src/converted')

const LINK_MAP = [
  [/index-2\.html/g, '/'],
  [/index\.html/g, '/'],
  [/index\.php/g, '/'],
  [/homepage-2\.html/g, '/home-2'],
  [/about-us\.html/g, '/about'],
  [/our-history\.html/g, '/history'],
  [/our-team\.html/g, '/team'],
  [/team-member-detail\.html/g, '/team/roman-amata'],
  [/services\.html/g, '/services'],
  [/service-details\.html/g, '/services/machine-analysis'],
  [/services\.php/g, '/services/machine-analysis'],
  [/contact-us\.html/g, '/contact'],
  [/product\.php/g, '/portfolio'],
  [/portfolio-sortable-grid-col-3\.html/g, '/portfolio'],
  [/portfolio-detail-style-01\.html/g, '/portfolio'],
  [/portfolio-grid-col-3\.html/g, '/portfolio'],
  [/portfolio-grid-col-2\.html/g, '/portfolio'],
  [/faq\.html/g, '/faq'],
  [/blog-classic\.html/g, '/contact'],
]

function mapLinks(html) {
  let out = html
  for (const [re, to] of LINK_MAP) out = out.replace(re, to)
  return out
}

function cssToObj(style) {
  const obj = {}
  style.split(';').forEach((rule) => {
    const i = rule.indexOf(':')
    if (i === -1) return
    const key = rule
      .slice(0, i)
      .trim()
      .replace(/-([a-z])/g, (_, c) => c.toUpperCase())
    const val = rule.slice(i + 1).trim()
    if (key) obj[key] = val
  })
  return obj
}

function convertAttrs(attrStr) {
  if (!attrStr) return ''
  return attrStr.replace(/([:@A-Za-z0-9_-]+)\s*=\s*("([^"]*)"|'([^']*)'|([^\s>]+))/g, (m, name, _all, dq, sq, bare) => {
    const raw = dq ?? sq ?? bare ?? ''
    let n = name
    if (n === 'class') n = 'className'
    else if (n === 'for') n = 'htmlFor'
    else if (n === 'tabindex') n = 'tabIndex'
    else if (n === 'readonly') n = 'readOnly'
    else if (n === 'maxlength') n = 'maxLength'
    else if (n === 'minlength') n = 'minLength'
    else if (n === 'colspan') n = 'colSpan'
    else if (n === 'rowspan') n = 'rowSpan'
    else if (n === 'cellpadding') n = 'cellPadding'
    else if (n === 'cellspacing') n = 'cellSpacing'
    else if (n === 'srcset') n = 'srcSet'
    else if (n === 'charset') n = 'charSet'
    else if (n === 'autocomplete') n = 'autoComplete'
    else if (n === 'autofocus') n = 'autoFocus'
    else if (n === 'crossorigin') n = 'crossOrigin'
    else if (n === 'xmlns:xlink') n = 'xmlnsXlink'
    else if (n === 'xlink:href') n = 'xlinkHref'
    else if (n === 'xml:space') n = 'xmlSpace'
    else if (n.includes(':')) {
      /* keep data-/aria- and namespaced as-is if already handled */
    } else if (!n.startsWith('data-') && !n.startsWith('aria-') && n.includes('-')) {
      n = n.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
    }

    if (n === 'style') {
      const obj = cssToObj(raw)
      const inner = Object.entries(obj)
        .map(([k, v]) => `${k}: ${JSON.stringify(v)}`)
        .join(', ')
      return `style={{${inner}}}`
    }

    if (n === 'href' && (raw.startsWith('/') || raw === '#')) {
      if (raw.startsWith('/') && !raw.startsWith('//')) {
        return `to="${raw}"`
      }
    }

    return `${n}=${JSON.stringify(raw)}`
  }).replace(/\s(checked|disabled|required|selected|autoplay|muted|loop|controls|playsinline|novalidate|readonly|multiple|defer|async)(?=(\s|>|\/))/gi, (m, name) => {
    const map = { readonly: 'readOnly', playsinline: 'playsInline', novalidate: 'noValidate' }
    const n = map[name.toLowerCase()] || name
    return ` ${n}={true}`
  })
}

function htmlToJsx(html) {
  let s = mapLinks(html)
  s = s.replace(/<!--([\s\S]*?)-->/g, (_m, c) => `{/*${c.replace(/\*\//g, '* /')}*/}`)
  s = s.replace(/<([a-zA-Z][\w:-]*)([^>]*)\/>/g, (_m, tag, attrs) => `<${tag}${convertAttrs(attrs)} />`)
  s = s.replace(/<([a-zA-Z][\w:-]*)([^>]*)>/g, (m, tag, attrs) => {
    if (m.startsWith('</')) return m
    const voidTags = /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/i
    const converted = convertAttrs(attrs)
    if (voidTags.test(tag)) return `<${tag}${converted} />`
    const lower = tag.toLowerCase()
    if (lower === 'a' && /to="\//.test(converted)) {
      return `<Link${converted}>`
    }
    return `<${tag}${converted}>`
  })
  s = s.replace(/<\/a>/g, '</a>')
  // Close Link tags where we opened Link
  // Heuristic: unmatched Link — replace </a> that follow Link by tracking is too hard.
  // Second pass: if tag was Link, closing should be </Link>
  s = fixLinkClosings(s)
  return s
}

function fixLinkClosings(jsx) {
  const parts = []
  const stack = []
  const re = /<\/?Link\b[^>]*\/?>|<\/?a\b[^>]*\/?>/g
  let last = 0
  let m
  const src = jsx
  // simpler: replace </a> immediately after Link open... walk
  let i = 0
  const tokens = []
  const tokenRe = /<Link\b[^>]*>|<\/Link>|<a\b[^>]*\/>|<a\b[^>]*>|<\/a>/g
  let out = ''
  let idx = 0
  const matches = [...src.matchAll(tokenRe)]
  if (!matches.length) return src
  const linkDepth = []
  let cursor = 0
  for (const match of matches) {
    out += src.slice(cursor, match.index)
    const tok = match[0]
    if (tok.startsWith('<Link') && !tok.endsWith('/>')) {
      linkDepth.push('Link')
      out += tok
    } else if (tok === '</Link>') {
      linkDepth.pop()
      out += tok
    } else if (tok.startsWith('<a') && tok.endsWith('/>')) {
      out += tok
    } else if (tok.startsWith('<a')) {
      linkDepth.push('a')
      out += tok
    } else if (tok === '</a>') {
      const lastType = linkDepth.pop()
      out += lastType === 'Link' ? '</Link>' : '</a>'
    } else {
      out += tok
    }
    cursor = match.index + tok.length
  }
  out += src.slice(cursor)
  return out
}

function extractPhp(html) {
  return html
    .replace(/<\?php include 'header\.php'; \?>/i, '')
    .replace(/<\?php\s+include 'footer\.php';\s*\?>/i, '')
    .trim()
}

function extractHtml(html) {
  const start = html.search(/<!-- Title Bar -->|<div class="pbmit-slider-area|<div class="pbmit-title-bar-wrapper/)
  const end = html.search(/<!-- footer -->|<footer class="site-footer/)
  if (start >= 0 && end > start) return html.slice(start, end).trim()
  return html
}

function wrapComponent(name, jsx) {
  return `import { Link } from 'react-router-dom'

export default function ${name}() {
  return (
    <>
${jsx
  .split('\n')
  .map((l) => (l ? '      ' + l : l))
  .join('\n')}
    </>
  )
}
`
}

const files = {
  'index.php': 'HomeContent.jsx',
  'homepage-2.html': 'HomeTwoContent.jsx',
  'about-us.html': 'AboutContent.jsx',
  'our-history.html': 'HistoryContent.jsx',
  'our-team.html': 'TeamContent.jsx',
  'team-member-detail.html': 'TeamDetailContent.jsx',
  'services.html': 'ServicesContent.jsx',
  'service-details.html': 'ServiceDetailsContent.jsx',
  'contact-us.html': 'ContactContent.jsx',
  'product.php': 'PortfolioContent.jsx',
}

fs.mkdirSync(OUT, { recursive: true })

for (const [srcName, outName] of Object.entries(files)) {
  const srcPath = path.join(ROOT, srcName)
  if (!fs.existsSync(srcPath)) {
    console.log('missing', srcName)
    continue
  }
  let raw = fs.readFileSync(srcPath, 'utf8')
  raw = srcName.endsWith('.php') ? extractPhp(raw) : extractHtml(raw)
  raw = raw.replace(/\[email&#160;protected\]/g, 'info@example.com')
  raw = raw.replace(/<span class="__cf_email__"[^>]*>.*?<\/span>/g, 'info@example.com')
  const jsx = htmlToJsx(raw)
  const comp = outName.replace('.jsx', '')
  fs.writeFileSync(path.join(OUT, outName), wrapComponent(comp, jsx))
  console.log('wrote', outName, 'chars', jsx.length)
}
