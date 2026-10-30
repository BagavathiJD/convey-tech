import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { pdfjsLib } from '../../lib/pdfjs'

export default function BrochureCard({ file, title, size, pages = '1 page' }) {
  const canvasRef = useRef(null)
  const [ready, setReady] = useState(false)
  const [failed, setFailed] = useState(false)
  const path = `/images/convey-tech/${file}`
  const viewSlug = file.replace(/\.pdf$/i, '')
  const viewTo = `/brochures/view/${viewSlug}`

  useEffect(() => {
    let cancelled = false
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const renderPreview = async () => {
      try {
        const loadingTask = pdfjsLib.getDocument({ url: path, withCredentials: false })
        const pdf = await loadingTask.promise
        if (cancelled) return
        const page = await pdf.getPage(1)
        if (cancelled) return

        const baseViewport = page.getViewport({ scale: 1 })
        const targetWidth = Math.min(640, canvas.parentElement?.clientWidth || 320)
        const scale = (targetWidth / baseViewport.width) * 1.6
        const viewport = page.getViewport({ scale })

        const context = canvas.getContext('2d', { alpha: false })
        canvas.width = Math.floor(viewport.width)
        canvas.height = Math.floor(viewport.height)
        await page.render({ canvasContext: context, viewport }).promise
        if (!cancelled) setReady(true)
      } catch {
        if (!cancelled) setFailed(true)
      }
    }

    renderPreview()
    return () => {
      cancelled = true
    }
  }, [path])

  return (
    <article className="ct-brochure-doc">
      <div className="ct-brochure-doc-thumb">
        {!ready && !failed ? <span className="ct-brochure-doc-loading">Loading preview…</span> : null}
        {failed ? (
          <span className="ct-brochure-doc-fallback">
            <strong>{title}</strong>
            <em>PDF Catalogue</em>
          </span>
        ) : null}
        <canvas ref={canvasRef} className={ready ? 'is-ready' : ''} />
      </div>
      <div className="ct-brochure-doc-meta">
        <span className="ct-brochure-doc-icon" aria-hidden="true">
          <span>PDF</span>
        </span>
        <span className="ct-brochure-doc-text">
          <strong>{file}</strong>
          <em>
            {pages} • PDF • {size}
          </em>
        </span>
      </div>
      <div className="ct-brochure-doc-actions">
        <Link className="ct-brochure-btn ct-brochure-btn--view" to={viewTo}>
          View
        </Link>
        <a className="ct-brochure-btn ct-brochure-btn--download" href={path} download={file}>
          Download
        </a>
      </div>
    </article>
  )
}
