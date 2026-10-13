import Navbar from './Navbar'

export default function MobileMenu({ openMenus, toggleMenu, onNavigate }) {
  return (
    <div className="site-navigation">
      <Navbar openMenus={openMenus} toggleMenu={toggleMenu} onNavigate={onNavigate} />
    </div>
  )
}
