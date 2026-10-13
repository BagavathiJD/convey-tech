import { useEffect, useState } from 'react'

export function useStickyHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return scrolled
}

export function useScrollTop() {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setActive(window.scrollY > window.innerHeight * 2)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  return { active, scrollToTop }
}

export function useMobileMenu() {
  const [open, setOpen] = useState(false)
  const [openMenus, setOpenMenus] = useState({})

  useEffect(() => {
    document.body.classList.toggle('active', open)
    document.body.classList.toggle('ct-menu-open', open)
    document.querySelectorAll('.pbmit-navbar > div').forEach((navInner) => {
      navInner.classList.toggle('active', open)
    })
    document.querySelectorAll('.pbmit-mobile-menu-bg').forEach((bg) => {
      bg.classList.toggle('active', open)
    })

    if (!open) return undefined

    const scrollY = window.scrollY
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.left = '0'
    document.body.style.right = '0'
    document.body.style.width = '100%'

    return () => {
      document.body.classList.remove('active', 'ct-menu-open')
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.width = ''
      window.scrollTo(0, scrollY)
    }
  }, [open])

  const toggleMenu = (label) => {
    setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }))
  }

  const close = () => {
    setOpen(false)
    setOpenMenus({})
  }

  return { open, setOpen, openMenus, toggleMenu, close }
}
