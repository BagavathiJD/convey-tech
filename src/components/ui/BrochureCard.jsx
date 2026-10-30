import { useEffect, useRef, useState } from 'react'
import * as pdfjsLib from 'pdfjs-dist'
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url'

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker

export default function BrochureCard({ file, title, size, pages = '1 page' }) {
  const canvasRef = useRef(null)
  const viewerRef = useRef(null)
  const [ready, setReady] = useState(false)
  const [failed, setFailed] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [busy, setBusy] = useState(false)
  const [viewerReady, setViewerReady] = useState(false)
  const path = `/images/convey-tech/${file}`

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

  useEffect(() => {
    if (!isOpen) return undefined

    let cancelled = false
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    const renderViewer = async () => {
      setViewerReady(false)
      const host = viewerRef.current
      if (!host) return
      host.innerHTML = ''

      try {
        const pdf = await pdfjsLib.getDocument({ url: path, withCredentials: false }).promise
        if (cancelled) return

        for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
          const page = await pdf.getPage(pageNumber)
          if (cancelled) return

          const baseViewport = page.getViewport({ scale: 1 })
          const width = Math.min(900, host.clientWidth || 320)
          const scale = width / baseViewport.width
          const viewport = page.getViewport({ scale: scale * (window.devicePixelRatio > 1 ? 1.35 : 1.2) })

          const canvas = document.createElement('canvas')
          canvas.className = 'ct-brochure-viewer-page'
          canvas.width = Math.floor(viewport.width)
          canvas.height = Math.floor(viewport.height)
          host.appendChild(canvas)

          const context = canvas.getContext('2d', { alpha: false })
          await page.render({ canvasContext: context, viewport }).promise
        }

        if (!cancelled) setViewerReady(true)
      } catch {
        if (!cancelled && host) {
          host.innerHTML = '<p class="ct-brochure-viewer-error">Unable to open this catalogue for viewing.</p>'
        }
      }
    }

    renderViewer()

    return () => {
      cancelled = true
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, path])

  const openViewer = (event) => {
    event.preventDefault()
    event.stopPropagation()
    setIsOpen(true)
  }

  const closeViewer = () => setIsOpen(false)

  const handleDownload = async (event) => {
    event.preventDefault()
    event.stopPropagation()
    if (busy) return
    setBusy(true)
    try {
      const response = await fetch(path)
      if (!response.ok) throw new Error('Download failed')
      const buffer = await response.arrayBuffer()
      const blob = new Blob([buffer], { type: 'application/pdf' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = file
      document.body.appendChild(link)
      link.click()
      link.remove()
      URL.revokeObjectURL(url)
    } finally {
      setBusy(false)
    }
  }

  return (
    <>
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
          <button type="button" className="ct-brochure-btn ct-brochure-btn--view" onClick={openViewer}>
            View
          </button>
          <button
            type="button"
            className="ct-brochure-btn ct-brochure-btn--download"
            onClick={handleDownload}
            disabled={busy}
          >
            {busy ? 'Saving…' : 'Download'}
          </button>
        </div>
      </article>

      {isOpen ? (
        <div
          className="ct-brochure-viewer"
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={closeViewer}
        >
          <div className="ct-brochure-viewer-panel" onClick={(event) => event.stopPropagation()}>
            <div className="ct-brochure-viewer-bar">
              <strong>{title}</strong>
              <div className="ct-brochure-viewer-actions">
                <button type="button" onClick={closeViewer} aria-label="Close PDF viewer">
                  Close
                </button>
              </div>
            </div>
            {!viewerReady ? <div className="ct-brochure-viewer-loading">Loading catalogue…</div> : null}
            <div className="ct-brochure-viewer-pages" ref={viewerRef} />
          </div>
        </div>
      ) : null}
    </>
  )
}
