import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import * as pdfjsLib from 'pdfjs-dist'
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url'
import Seo from '../components/common/Seo'

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker

const ALLOWED = {
  'catlog-1': {
    file: 'catlog-1.pdf',
    title: 'Product Catalogue 01',
  },
  'catlog-2': {
    file: 'catlog-2.pdf',
    title: 'Product Catalogue 02',
  },
  'catlog-3': {
    file: 'catlog-3.pdf',
    title: 'Product Catalogue 03',
  },
}

export default function BrochureViewer() {
  const { slug } = useParams()
  const brochure = ALLOWED[slug]
  const [pages, setPages] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!brochure) {
      setLoading(false)
      setError('Catalogue not found.')
      return undefined
    }

    let cancelled = false
    const urls = []

    const load = async () => {
      try {
        setLoading(true)
        setError('')
        const path = `/images/convey-tech/${brochure.file}`
        const pdf = await pdfjsLib.getDocument({ url: path, withCredentials: false }).promise
        if (cancelled) return

        const rendered = []
        for (let i = 1; i <= pdf.numPages; i += 1) {
          const page = await pdf.getPage(i)
          const base = page.getViewport({ scale: 1 })
          const scale = Math.min(1.6, 900 / base.width)
          const viewport = page.getViewport({ scale })
          const canvas = document.createElement('canvas')
          const context = canvas.getContext('2d', { alpha: false })
          canvas.width = Math.floor(viewport.width)
          canvas.height = Math.floor(viewport.height)
          await page.render({ canvasContext: context, viewport }).promise
          const url = canvas.toDataURL('image/jpeg', 0.92)
          urls.push(url)
          rendered.push(url)
        }
        if (!cancelled) setPages(rendered)
      } catch {
        if (!cancelled) setError('Unable to open this catalogue. Please try Download instead.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [brochure])

  if (!brochure) {
    return (
      <div className="ct-pdf-viewer-page">
        <Seo title="Catalogue Not Found" />
        <div className="container ct-pdf-viewer-inner">
          <p>Catalogue not found.</p>
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    )
  }

  const downloadHref = `/images/convey-tech/${brochure.file}`

  return (
    <div className="ct-pdf-viewer-page">
      <Seo title={brochure.title} description={`View ${brochure.title} online.`} />
      <div className="ct-pdf-viewer-bar">
        <div className="container ct-pdf-viewer-bar-inner">
          <Link to="/" className="ct-pdf-viewer-back">
            ← Back
          </Link>
          <strong>{brochure.title}</strong>
          <a className="ct-pdf-viewer-download" href={downloadHref} download={brochure.file}>
            Download PDF
          </a>
        </div>
      </div>
      <div className="container ct-pdf-viewer-inner">
        {loading ? <p className="ct-pdf-viewer-status">Opening catalogue…</p> : null}
        {error ? <p className="ct-pdf-viewer-status">{error}</p> : null}
        <div className="ct-pdf-viewer-pages">
          {pages.map((src, index) => (
            <img key={`${brochure.file}-${index}`} src={src} alt={`${brochure.title} page ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  )
}
