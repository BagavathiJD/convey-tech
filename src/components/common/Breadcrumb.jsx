import { Link } from 'react-router-dom'

export default function Breadcrumb({ items = [] }) {
  return (
    <div className="pbmit-breadcrumb">
      <div className="pbmit-breadcrumb-inner">
        {items.map((item, index) => (
          <span key={`${item.label}-${index}`}>
            {index > 0 ? <span className="sep"></span> : null}
            {item.to ? (
              <Link title="" to={item.to} className={index === 0 ? 'home' : undefined}>
                <span>{item.label}</span>
              </Link>
            ) : (
              <span className="post-root post post-post current-item">{item.label}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}
