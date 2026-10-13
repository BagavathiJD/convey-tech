import { Link } from 'react-router-dom'

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
              <div className="col-md-6 col-lg-3">
                <article className="pbmit-team-style-1 clients-page-card">
                  <div className="pbminfotech-post-item">
                    <div className="pbmit-featured-wrap">
                      <div className="pbmit-featured-inner">
                        <div className="pbmit-featured-img-wrapper">
                          <div className="pbmit-featured-wrapper">
                            <img src="/images/convey-tech/client-1.png" className="img-fluid" alt="Greaves Cotton Limited" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pbminfotech-box-content">
                      <h3 className="pbmit-team-title">Greaves Cotton Limited</h3>
                      <div className="pbminfotech-box-team-position">Engineering</div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-md-6 col-lg-3">
                <article className="pbmit-team-style-1 clients-page-card">
                  <div className="pbminfotech-post-item">
                    <div className="pbmit-featured-wrap">
                      <div className="pbmit-featured-inner">
                        <div className="pbmit-featured-img-wrapper">
                          <div className="pbmit-featured-wrapper">
                            <img src="/images/convey-tech/client-2.png" className="img-fluid" alt="Unity Infraprojects Limited" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pbminfotech-box-content">
                      <h3 className="pbmit-team-title">Unity Infraprojects Limited</h3>
                      <div className="pbminfotech-box-team-position">Infrastructure</div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-md-6 col-lg-3">
                <article className="pbmit-team-style-1 clients-page-card">
                  <div className="pbminfotech-post-item">
                    <div className="pbmit-featured-wrap">
                      <div className="pbmit-featured-inner">
                        <div className="pbmit-featured-img-wrapper">
                          <div className="pbmit-featured-wrapper">
                            <img src="/images/convey-tech/client-3.png" className="img-fluid" alt="Vijay Nirman Company" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pbminfotech-box-content">
                      <h3 className="pbmit-team-title">Vijay Nirman Company</h3>
                      <div className="pbminfotech-box-team-position">Engineers &amp; Constructors</div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-md-6 col-lg-3">
                <article className="pbmit-team-style-1 clients-page-card">
                  <div className="pbminfotech-post-item">
                    <div className="pbmit-featured-wrap">
                      <div className="pbmit-featured-inner">
                        <div className="pbmit-featured-img-wrapper">
                          <div className="pbmit-featured-wrapper">
                            <img src="/images/convey-tech/client-4.png" className="img-fluid" alt="Saisudhir" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pbminfotech-box-content">
                      <h3 className="pbmit-team-title">Saisudhir</h3>
                      <div className="pbminfotech-box-team-position">Industrial Projects</div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-md-6 col-lg-3">
                <article className="pbmit-team-style-1 clients-page-card">
                  <div className="pbminfotech-post-item">
                    <div className="pbmit-featured-wrap">
                      <div className="pbmit-featured-inner">
                        <div className="pbmit-featured-img-wrapper">
                          <div className="pbmit-featured-wrapper">
                            <img src="/images/convey-tech/client-5.png" className="img-fluid" alt="Coastal Projects Limited" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pbminfotech-box-content">
                      <h3 className="pbmit-team-title">Coastal Projects Limited</h3>
                      <div className="pbminfotech-box-team-position">Infrastructure</div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-md-6 col-lg-3">
                <article className="pbmit-team-style-1 clients-page-card">
                  <div className="pbminfotech-post-item">
                    <div className="pbmit-featured-wrap">
                      <div className="pbmit-featured-inner">
                        <div className="pbmit-featured-img-wrapper">
                          <div className="pbmit-featured-wrapper">
                            <img src="/images/convey-tech/client-6.png" className="img-fluid" alt="GD" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pbminfotech-box-content">
                      <h3 className="pbmit-team-title">GD</h3>
                      <div className="pbminfotech-box-team-position">Industrial Partner</div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
