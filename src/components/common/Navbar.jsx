import { Link, NavLink, useLocation } from 'react-router-dom'
import { navItems, site } from '../../data/siteData'

function isActivePath(to, pathname) {
  if (to === '/') return pathname === '/' || pathname === '/home-2'
  return pathname === to || pathname.startsWith(`${to}/`)
}

export default function Navbar({ openMenus, toggleMenu, onNavigate, navId }) {
  const { pathname } = useLocation()

  return (
    <nav className="main-navigation pbmit-navbar main-menu navbar-expand-xl navbar-light" id={navId}>
      <div>
        <div className="pbmit-mobile-menu-header">
          <div className="pbmit-mobile-menu-logo">
            <Link to="/" onClick={onNavigate}>
              <img src="/images/convey-tech/convey-tech-logo.png" alt={site.name} />
            </Link>
          </div>
          <span
            className="closepanel"
            onClick={onNavigate}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onNavigate()}
            aria-label="Close menu"
          >
            <svg className="qodef-svg--close qodef-m" xmlns="http://www.w3.org/2000/svg" width="20.163" height="20.163" viewBox="0 0 26.163 26.163">
              <rect width="36" height="1" transform="translate(0.707) rotate(45)"></rect>
              <rect width="36" height="1" transform="translate(0 25.456) rotate(-45)"></rect>
            </svg>
          </span>
        </div>
        <ul className="navigation clearfix" id="pbmit-top-menu">
          {navItems.map((item) => {
            const hasKids = Boolean(item.children?.length)
            const active = isActivePath(item.to, pathname)
            return (
              <li key={item.label} className={`${hasKids ? 'dropdown' : ''} ${active ? 'active' : ''}`.trim()}>
                {hasKids ? (
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      toggleMenu(item.label)
                    }}
                  >
                    {item.label}
                  </a>
                ) : (
                  <NavLink to={item.to} onClick={onNavigate}>
                    {item.label}
                  </NavLink>
                )}
                {hasKids ? (
                  <>
                    <ul className={openMenus[item.label] ? 'open' : undefined}>
                      {item.children.map((child) => (
                        <li key={child.to} className={pathname === child.to ? 'active' : undefined}>
                          <Link to={child.to} onClick={onNavigate}>
                            <span className="pbmit-span-wrapper">{child.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <span
                      className="righticon"
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        toggleMenu(item.label)
                      }}
                    >
                      <i className={openMenus[item.label] ? 'pbmit-base-icon-up-open-big' : 'pbmit-base-icon-angle-right'}></i>
                    </span>
                  </>
                ) : null}
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
