import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import ScrollToTop from '../components/common/ScrollToTop'
import { useStickyHeader, useMobileMenu } from '../hooks/useScroll'
import { useThemeEffects } from '../hooks/useThemeEffects'

export default function MainLayout({ children }) {
  const stickyFixed = useStickyHeader()
  const { setOpen, open, openMenus, toggleMenu, close } = useMobileMenu()

  useThemeEffects()

  return (
    <div className="page-wrapper" id="page">
      <Header
        stickyFixed={stickyFixed}
        openMenus={openMenus}
        toggleMenu={toggleMenu}
        onMenu={() => setOpen((v) => !v)}
        onNavigate={close}
        menuOpen={open}
      />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
