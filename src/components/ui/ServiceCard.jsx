import { Link } from 'react-router-dom'

export default function ServiceCard({ title, description, image, to = '/services/machine-analysis', icon }) {
  return (
    <article className="pbmit-service-style-1">
      <div className="pbminfotech-post-item">
        <div className="pbmit-box-content-wrap">
          <div className="pbmit-image-wrap">
            <div className="pbmit-featured-img-wrapper">
              <div className="pbmit-featured-wrapper">
                <img src={image} className="img-fluid" alt={title} />
              </div>
            </div>
            {icon ? <div className="pbmit-service-icon-wrapper"><div className="pbmit-service-icon" dangerouslySetInnerHTML={{ __html: icon }} /></div> : null}
            <Link className="pbmit-link" to={to}></Link>
          </div>
          <div className="pbmit-service-content-wrap">
            <h3 className="pbmit-service-title">
              <Link to={to}>{title}</Link>
            </h3>
            <div className="pbmit-service-description">
              <p>{description}</p>
            </div>
            <div className="pbmit-service-btn-wrapper">
              <div className="pbmit-service-btn">
                <Link className="pbmit-button-inner" to={to}>
                  <span className="pbmit-button-text">Read More</span>
                  <i className="pbmit-base-icon-right-arrow"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
