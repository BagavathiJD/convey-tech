import { Link } from 'react-router-dom'
import { site } from '../../data/siteData'
import { getProductPath, products } from '../../data/products'

export default function Footer() {
  const mid = Math.ceil(products.length / 2)
  const productCols = [products.slice(0, mid), products.slice(mid)]

  return (
    <footer className="custom-footer">
      <div className="footer-inner">
        <div className="footer-main">
          <div className="footer-column footer-brand">
            <Link to="/" className="footer-brand-name">
              <img
                src="/images/convey-tech/convey-tech-logo.png"
                alt={site.name}
              />
            </Link>
            <p className="footer-description">
              Convey Tech delivers reliable industrial conveyor systems, storage
              silos, cement feeding solutions, and equipment designed to improve
              efficiency across industries.
            </p>
          </div>

          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/portfolio">Gallery</Link></li>
              <li><Link to="/clients">Clients</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-column footer-column--products">
            <h3>Products</h3>
            <div className="footer-products-split">
              {productCols.map((col, colIndex) => (
                <ul key={colIndex}>
                  {col.map((product) => (
                    <li key={product.slug}>
                      <Link to={getProductPath(product)}>{product.title}</Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-mid">
          <div className="footer-mid-left">
            <p className="footer-copyright">
              © 2026 {site.name}. All rights reserved.
            </p>
          </div>
          <div className="footer-mid-right">
            <p className="footer-credit">
              Designed &amp; Developed by{' '}
              <a href="https://indiafloats.in/" target="_blank" rel="noreferrer">
                India Floats Technologies
              </a>
            </p>
          </div>
        </div>

        <div className="footer-mark" aria-hidden="true">
          <span>Convey Tech</span>
        </div>
      </div>
    </footer>
  )
}
