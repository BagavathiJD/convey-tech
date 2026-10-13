import { Link } from 'react-router-dom'
import { getProductPath, products } from '../data/products'

export default function ServicesContent() {
  return (
    <>
      <div className="pbmit-title-bar-wrapper">
        <div className="container">
          <div className="pbmit-title-bar-content">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container">
                  <h1 className="pbmit-tbar-title"> Products</h1>
                </div>
              </div>
              <div className="pbmit-breadcrumb">
                <div className="pbmit-breadcrumb-inner">
                  <span>
                    <a title="" href="#" className="home"><span>Home</span></a>
                  </span>
                  <span className="sep"></span>
                  <span><span className="post-root post post-post current-item"> Products</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <section className="section-sm">
          <div className="container">
            <div className="pbmit-element-posts-wrapper row">
              {products.map((product, index) => {
                const to = getProductPath(product)
                const imageIndex = String(index + 1).padStart(2, '0')
                return (
                  <article className="pbmit-service-style-1 col-md-6 col-lg-4" key={product.slug}>
                    <div className="pbminfotech-post-item">
                      <div className="pbmit-box-content-wrap">
                        <div className="pbmit-image-wrap">
                          <div className="pbmit-featured-img-wrapper">
                            <div className="pbmit-featured-wrapper">
                              <img src={product.listingImage || `/images/service/service-${imageIndex}.jpg`} className="img-fluid" alt={product.title} />
                            </div>
                          </div>
                          <Link className="pbmit-link" to={to}></Link>
                        </div>
                        <div className="pbmit-service-content-wrap">
                          <h3 className="pbmit-service-title">
                            <Link to={to}>{product.title}</Link>
                          </h3>
                          <div className="pbmit-service-description">
                            <p>{product.listingDesc}</p>
                          </div>
                          <div className="pbmit-service-btn-wrapper">
                            <div className="pbmit-service-btn">
                              <Link className="pbmit-button-inner" to={to}>
                                <span className="pbmit-button-text">Read More</span>
                                <i className="pbmit-base-icon-right-arrow"></i>
                              </Link>
                            </div>
                          </div>
                          <Link className="pbmit-link" to={to}></Link>
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
