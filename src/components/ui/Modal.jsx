export default function Modal({ open, onClose, children }) {
  if (!open) return null
  return (
    <div className="pbmit-react-lightbox is-open" onClick={onClose} role="presentation">
      <button
        type="button"
        className="pbmit-lightbox-close"
        aria-label="Close"
        title="Close (Esc)"
        onClick={onClose}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <div className="pbmit-lightbox-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}
