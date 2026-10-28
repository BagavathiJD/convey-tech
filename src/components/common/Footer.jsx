import { Link } from 'react-router-dom'
import { site } from '../../data/siteData'
import { getProductPath, products } from '../../data/products'

export default function Footer() {
  return (
    <footer className="custom-footer">

      {/* Footer Information */}
      <div className="footer-main">

        {/* Company Brand */}
        <div className="footer-brand">
          <Link to="/" className="footer-brand-name">
            <img
              src="/images/convey-tech/convey-tech-logo.png"
              alt={site.name}
            />
          </Link>

          <p className="footer-description">
            Convey Tech delivers reliable industrial conveyor systems,
            storage silos, cement feeding solutions, and equipment
            designed to improve efficiency across industries.
          </p>
        </div>
        {/* Company Links */}
        <div className="footer-column">
          <h3>Our Company</h3>

          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Products */}
        <div className="footer-column">
          <h3>Our Products</h3>

          <ul>
            {products.map((product) => (
              <li key={product.slug}>
                <Link to={getProductPath(product)}>
                  {product.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        

        {/* Contact */}
        <div className="footer-column footer-contact">
          <h3>Get in Touch</h3>

          <p>{site.address}</p>

          <a href={`mailto:${site.email}`}>
            {site.email}
          </a>

          <a href={site.phoneHref}>
            6381108876
          </a>

          <a href={site.phoneSecondaryHref}>
            6379801161
          </a>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">

        {/* Copyright - Left */}
        <p className="footer-copyright">
          Copyright © 2026 {site.name}.
          <br />
          All rights reserved.
        </p>

        {/* Developer Credit - Right */}
        <p className="footer-credit">
          Designed &amp; Developed by{' '}
          <a
            href="https://indiafloats.in/"
            target="_blank"
            rel="noreferrer"
          >
            India Floats Technologies
          </a>
        </p>

      </div>

    </footer>
  )
}
