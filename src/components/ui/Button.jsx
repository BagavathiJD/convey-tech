import { Link } from 'react-router-dom'

export default function ThemeButton({ to = '/about', children = 'Discover More', variant = '', className = '' }) {
  const cls = ['pbmit-btn', variant, className].filter(Boolean).join(' ')
  return (
    <Link to={to} className={cls}>
      <span className="pbmit-button-content-wrapper">
        <span className="pbmit-button-icon">
          <i className="pbmit-induyst-icon pbmit-induyst-icon-next"></i>
        </span>
        <span className="pbmit-button-text">{children}</span>
      </span>
    </Link>
  )
}
