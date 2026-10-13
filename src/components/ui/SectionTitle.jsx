export default function SectionTitle({ subtitle, title, desc, center = false, className = '' }) {
  return (
    <div className={`pbmit-heading-subheading ${center ? 'text-center' : ''} ${className}`.trim()}>
      {subtitle ? <h4 className="pbmit-subtitle">{subtitle}</h4> : null}
      {title ? <h2 className="pbmit-title">{title}</h2> : null}
      {desc ? <div className="pbmit-heading-desc">{desc}</div> : null}
    </div>
  )
}
