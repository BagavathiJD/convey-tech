import { Link } from 'react-router-dom'

export default function TeamCard({ name, role, image, to = '/team/roman-amata' }) {
  return (
    <article className="pbmit-team-style-1">
      <div className="pbminfotech-post-item">
        <div className="pbmit-featured-wrap">
          <div className="pbmit-featured-inner">
            <div className="pbmit-featured-img-wrapper">
              <div className="pbmit-featured-wrapper">
                <img src={image} className="img-fluid" alt={name} />
              </div>
            </div>
            <Link className="pbmit-link" to={to}></Link>
          </div>
        </div>
        <div className="pbminfotech-box-content">
          <h3 className="pbmit-team-title">
            <Link to={to}>{name}</Link>
          </h3>
          <div className="pbminfotech-box-team-position">{role}</div>
        </div>
      </div>
    </article>
  )
}
