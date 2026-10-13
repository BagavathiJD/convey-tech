import { Link } from 'react-router-dom'
import { site } from '../../data/siteData'
import Navbar from './Navbar'

function Logo() {
  return (
    <div className="site-branding ct-header-logo">
      <Link to="/" className="site-title">
        <img src="/images/convey-tech/convey-tech-logo.png" alt={site.name} />
      </Link>
    </div>
  )
}

function MenuToggle({ onMenu, onClose, open = false }) {
  return (
    <div className={`pbmit-burger-menu-wrapper${open ? ' active' : ''}`}>
      <div
        className={`pbmit-mobile-menu-bg${open ? ' active' : ''}`}
        onClick={onClose}
        role="presentation"
      ></div>
      <button
        type="button"
        id="menu-toggle"
        className="nav-menu-toggle"
        onClick={onMenu}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        <i className={open ? 'pbmit-base-icon-cancel' : 'pbmit-base-icon-menu-1'}></i>
      </button>
    </div>
  )
}

export default function Header({ stickyFixed, openMenus, toggleMenu, onMenu, onNavigate, menuOpen }) {
  return (
    <header
      className={`site-header ct-header${stickyFixed || menuOpen ? ' is-scrolled' : ''}${menuOpen ? ' is-menu-open' : ''}`}
      id="masthead"
    >
      <div className="ct-header-inner">
        <Logo />
        <div className="ct-header-nav site-navigation">
          <Navbar navId="site-navigation" openMenus={openMenus} toggleMenu={toggleMenu} onNavigate={onNavigate} />
        </div>
        <div className="ct-header-actions">
          <Link to="/contact" className="ct-header-cta" onClick={onNavigate}>
            Get in Touch
          </Link>
          <MenuToggle onMenu={onMenu} onClose={onNavigate} open={menuOpen} />
        </div>
      </div>
    </header>
  )
}
