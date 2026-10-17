import { Link } from 'react-router-dom'
import { site } from '../../data/siteData'
import { getProductPath, products } from '../../data/products'

export default function Footer() {
  return (
    <footer className="site-footer pbmit-footer-style-1 pbmit-bg-color-blackish">
      <div className="pbmit-footer-big-area-wrapper">
        <div className="pbmit-footer-big-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12 col-lg-6 pbmit-footer-left">
                <h3>Empowering Industries with Advanced Engineering Solutions</h3>
              </div>
              <div className="col-md-12 col-lg-6 text-lg-end">
                <div className="pbmit-footer-logo">
                  <img className="pbmit-main-logo" src="/images/convey-tech/convey-tech-logo.png" alt={site.name} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pbmit-footer-widget-area">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 pbmit-footer-widget">
              <aside className="widget">
                <h2 className="widget-title">Our Company</h2>
                <ul className="menu footer-company-contact">

                  <li>{site.address}</li>
                  <li>
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </li>
                  <li>
                    <a href={site.phoneHref}>6381108876</a> / <a href={site.phoneSecondaryHref}>6379801161</a>
                  </li>
                </ul>
              </aside>
            </div>
            <div className="col-md-12 col-lg-6 pbmit-footer-widget">
              <aside className="widget">
                <h2 className="widget-title">Our Products</h2>
                <ul className="menu footer-products-menu">
                  {products.map((product) => (
                    <li key={product.slug}>
                      <Link to={getProductPath(product)}>{product.title}</Link>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
            <div className="col-md-6 col-lg-3 pbmit-footer-widget">
              <aside className="widget">
                <h2 className="widget-title">Location</h2>
                <div className="footer-map">
                  <iframe
                    src="https://maps.google.com/maps?q=Vaishnavi%20Jeswanth%20Apartments%20Chozhambedu%20Road%20Ambattur%20Chennai%20600053&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"
                    title="Conveytech Group, Ambattur, Chennai"
                    aria-label="Conveytech Group, Ambattur, Chennai"
                    loading="lazy"
                  ></iframe>
                </div>
              </aside>
            </div>
            {/* <div className="col-md-6 col-lg-3 pbmit-footer-widget">
              <aside className="widget">
                <h2 className="widget-title">Quick Link</h2>
                <ul className="menu">
                  <li>
                    <Link to="/faq">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/team">Team</Link>
                  </li>
                  <li>
                    <Link to="/faq">Terms of use</Link>
                  </li>
                </ul>
              </aside>
            </div> */}
          </div>
        </div>
      </div>
      <div className="pbmit-footer-text-area">
        <div className="container">
          <div className="pbmit-footer-text-inner">
            <div className="row">
              <div className="col-md-6">
                <div className="pbmit-footer-copyright-text-area">
                  {' '}
                  Copyright © 2026  <Link to="/">{site.name}</Link>, All Rights Reserved.
                </div>
              </div>
              <div className="col-md-6 text-md-end">
                <div className="pbmit-footer-social-area">
                  Designed by <a href="https://indiafloats.in/" target="_blank" rel="noreferrer">India Floats Technologies</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
