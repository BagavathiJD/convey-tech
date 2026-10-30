import * as pdfjsLib from 'pdfjs-dist'

// Use CDN worker in production so Vercel/Vite hashed worker paths don't break.
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`

export { pdfjsLib }
