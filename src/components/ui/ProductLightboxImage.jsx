export default function ProductLightboxImage({ src, alt = '', className = '' }) {
  return (
    <a href={src} className={`pbmit-lightbox product-lightbox-link ${className}`.trim()} title="View full image">
      <img src={src} alt={alt} />
    </a>
  )
}
