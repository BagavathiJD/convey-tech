import { Link } from 'react-router-dom'

const clients = [
 
  { name: 'ACC', image: 'acc-logo.webp' },
  { name: 'Lakshmi', image: 'laksmi-logo.webp' },
  { name: 'Vimal Bricks', image: 'vimal-bricks-logo.webp' },
  { name: 'DBL', image: 'dbl-logo.png' },
  { name: 'GMS', image: 'gms-logo.png' },
  { name: 'PC', image: 'p-c-logo.png' },
  { name: 'R.R. Thulasi', image: 'rr-thulasi-logo.png' },
  { name: 'Srinivasa', image: 'srinivasa-logo.png' },
  { name: 'TTK Construction', image: 'ttk-construction-logo.png' },
  { name: 'URC Construction', image: 'urc-construction-image.svg' },
  { name: 'TPK Infra', image: 'tpk-infra-logo.jpg' },
   { name: 'Greaves Cotton Limited', image: 'client-1.png', category: 'Engineering' },
  { name: 'Unity Infraprojects Limited', image: 'client-2.png', category: 'Infrastructure' },
  { name: 'Vijay Nirman Company', image: 'client-3.png', category: 'Engineers & Constructors' },
  { name: 'Saisudhir', image: 'client-4.png', category: 'Industrial Projects' },
  { name: 'Coastal Projects Limited', image: 'client-5.png', category: 'Infrastructure' },
  { name: 'GD', image: 'client-6.png', category: 'Industrial Partner' },
]

export default function ClientsContent() {
  return (
    <>
      <div className="pbmit-title-bar-wrapper">
        <div className="container">
          <div className="pbmit-title-bar-content">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container">
                  <h1 className="pbmit-tbar-title">Clients</h1>
                </div>
              </div>
              <div className="pbmit-breadcrumb">
                <div className="pbmit-breadcrumb-inner">
                  <span>
                    <Link to="/" className="home">
                      <span>Home</span>
                    </Link>
                  </span>
                  <span className="sep"></span>
                  <span>
                    <span className="post-root post post-post current-item"> Clients</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <section className="section-xl team-section-one pbmit-column-four clients-page-section">
          <div className="container">
            <div className="pbmit-heading-subheading text-center">
              <h4 className="pbmit-subtitle">Our Clients</h4>
              <h2 className="pbmit-title">
                Companies that trust
                <br /> our engineering
              </h2>
            </div>
            <div className="row g-4">
              {clients.map((client) => (
                <div className="col-md-6 col-lg-3" key={client.image}>
                  <article className="pbmit-team-style-1 clients-page-card">
                    <div className="pbminfotech-post-item">
                      <div className="pbmit-featured-wrap">
                        <div className="pbmit-featured-inner">
                          <div className="pbmit-featured-img-wrapper">
                            <div className="pbmit-featured-wrapper">
                              <img
                                src={`/images/convey-tech/${client.image}`}
                                className="img-fluid"
                                alt={client.name}
                                loading="lazy"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pbminfotech-box-content">
                        <h3 className="pbmit-team-title">{client.name}</h3>
                        {client.category && (
                          <div className="pbminfotech-box-team-position">{client.category}</div>
                        )}
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
