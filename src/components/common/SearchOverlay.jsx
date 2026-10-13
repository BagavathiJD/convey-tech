import { useState } from 'react'

export default function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  if (!open) return null

  return (
    <div className="pbmit-header-search-form active">
      <div className="pbmit-search-overlay" onClick={onClose}></div>
      <div className="pbmit-header-search-form-wrapper">
        <div className="pbmit-search-close" onClick={onClose} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onClose()}>
          <svg className="qodef-svg--close qodef-m" xmlns="http://www.w3.org/2000/svg" width="28.163" height="28.163" viewBox="0 0 26.163 26.163">
            <rect width="36" height="1" transform="translate(0.707) rotate(45)"></rect>
            <rect width="36" height="1" transform="translate(0 25.456) rotate(-45)"></rect>
          </svg>
        </div>
        <form role="search" className="search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            className="search-field"
            placeholder="Search …"
            value={query}
            name="s"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="search-submit" title="Search"></button>
          <div className="pbmit-search-line"></div>
        </form>
      </div>
    </div>
  )
}
