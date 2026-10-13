import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Swiper from 'swiper'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import AOS from 'aos'

function toBool(v) {
  if (v === true || v === 'true') return true
  if (v === false || v === 'false') return false
  return Boolean(v)
}

function initSwipers() {
  const nodes = document.querySelectorAll('.swiper-slider')
  const instances = []
  let x = 1
  nodes.forEach((carouselElement) => {
    const columns = parseFloat(carouselElement.dataset.columns || '1')
    const loop = toBool(carouselElement.dataset.loop)
    let autoplay2 = toBool(carouselElement.dataset.autoplay)
    const valNav = toBool(carouselElement.dataset.arrows)
    const navArrow = carouselElement.dataset.arrowsClass
    const valDots = toBool(carouselElement.dataset.dots)
    const valDotsOutside = toBool(carouselElement.dataset.outside)
    const valCenter = toBool(carouselElement.dataset.center)
    let style = carouselElement.dataset.effect || 'slide'
    const slSpeed = 2000

    carouselElement.classList.add(`pbmit-element-viewtype-carousel-${x}`)

    let responsiveItems
    if (columns === 1) responsiveItems = [columns, 1, 1, 1, 1]
    else if (columns === 2) responsiveItems = [columns, 2, 2, 2, 1]
    else if (columns === 3 || columns === 3.6) responsiveItems = [columns, 2, 2, 1, 1]
    else if (columns === 4) responsiveItems = [columns, 4, 3, 2, 1]
    else if (columns === 5) responsiveItems = [5, 4, 3, 2, 1]
    else if (columns === 6) responsiveItems = [6, 4, 3, 2, 1]
    else responsiveItems = [3, 3, 2, 2, 1]

    if (valDots && !carouselElement.querySelector('.swiper-pagination')) {
      carouselElement.insertAdjacentHTML('beforeend', '<div class="swiper-pagination"></div>')
    }

    if (valNav && !carouselElement.querySelector('.swiper-button-next')) {
      const wrap = navArrow ? document.querySelector(`.${navArrow}`) : carouselElement
      if (wrap && !wrap.querySelector('.swiper-buttons')) {
        wrap.insertAdjacentHTML('beforeend', '<div class="swiper-buttons"></div>')
        const buttons = wrap.querySelector('.swiper-buttons') || wrap
        buttons.insertAdjacentHTML('beforeend', `<div class="swiper-button-next swiper-button-next-${x}"></div>`)
        buttons.insertAdjacentHTML('beforeend', `<div class="swiper-button-prev swiper-button-prev-${x}"></div>`)
      }
    }

    let paginationVal = false
    if (valDots) {
      paginationVal = carouselElement.classList.contains('pbmit-sep-number')
        ? { el: '.swiper-pagination', type: 'fraction' }
        : { el: '.swiper-pagination', clickable: true }
    }

    let navigationVal = false
    if (valNav) {
      navigationVal = {
        nextEl: `.swiper-button-next-${x}`,
        prevEl: `.swiper-button-prev-${x}`,
      }
    }

    let marginVal = 30
    if (carouselElement.dataset.margin !== undefined && carouselElement.dataset.margin !== '') {
      marginVal = Number(carouselElement.dataset.margin)
    }

    if (carouselElement.classList.contains('marquee')) {
      instances.push(
        new Swiper(`.pbmit-element-viewtype-carousel-${x}`, {
          modules: [Autoplay],
          spaceBetween: 0,
          centeredSlides: true,
          speed: 10000,
          autoplay: { delay: 1, disableOnInteraction: true },
          loop: true,
          slidesPerView: 'auto',
          allowTouchMove: false,
        }),
      )
    } else {
      const autoplayOpt = autoplay2 ? { delay: 5000 } : false
      instances.push(
        new Swiper(`.pbmit-element-viewtype-carousel-${x}`, {
          modules: [Navigation, Pagination, Autoplay, EffectFade],
          loop,
          navigation: navigationVal,
          pagination: paginationVal,
          slidesPerView: columns,
          spaceBetween: marginVal,
          autoplay: autoplayOpt,
          effect: style,
          speed: slSpeed,
          grabCursor: false,
          centeredSlides: valCenter,
          fadeEffect: { crossFade: true },
          autoHeight: Boolean(carouselElement.closest('.pbmit-slider-one')),
          breakpoints: {
            1199: { slidesPerView: responsiveItems[0] },
            991: { slidesPerView: responsiveItems[1] },
            767: { slidesPerView: responsiveItems[2] },
            575: { slidesPerView: responsiveItems[3] },
            0: { slidesPerView: responsiveItems[4] },
          },
        }),
      )
      if (valDotsOutside) {
        const wrapEl = carouselElement.querySelector('.swiper-wrapper')
        if (wrapEl && !wrapEl.parentElement.classList.contains('overflow-hidden')) {
          wrapEl.parentElement.classList.add('overflow-hidden')
        }
      }
    }
    x += 1
  })
  return instances
}

function initCounters() {
  const els = document.querySelectorAll('[data-appear-animation]')
  const observers = []
  els.forEach((el) => {
    if (el.dataset.counted === '1') return
    const to = Number(el.dataset.to || el.textContent || 0)
    const from = Number(el.dataset.from || 0)
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || el.dataset.counted === '1') return
          el.dataset.counted = '1'
          const start = performance.now()
          const dur = 2000
          const tick = (now) => {
            const p = Math.min(1, (now - start) / dur)
            el.textContent = String(Math.round(from + (to - from) * p))
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        })
      },
      { threshold: 0.35 },
    )
    obs.observe(el)
    observers.push(obs)
  })
  return observers
}

function initProgress() {
  const bars = document.querySelectorAll('.pbmit-progress-bar')
  const observers = []
  bars.forEach((bar) => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || bar.classList.contains('completed')) return
        bar.style.width = `${bar.dataset.max || 0}%`
        bar.classList.add('completed')
      })
    }, { threshold: 0.2 })
    obs.observe(bar)
    observers.push(obs)
  })
  return observers
}

function initFade() {
  const sections = document.querySelectorAll('.fade-section')
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible', 'active', 'visible')
      })
    },
    { threshold: 0.1 },
  )
  sections.forEach((s) => obs.observe(s))
  return obs
}

function shouldSkipReveal(el) {
  if (!el) return true
  if (el.hasAttribute('data-aos')) return true
  if (el.classList.contains('site-reveal')) return true
  return Boolean(
    el.closest('.pbmit-slider-area, .swiper-wrapper, .swiper-slide, .site-header, .pbmit-sticky-header, .pbmit-backtotop'),
  )
}

function initSiteReveals() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) return { disconnect() {} }

  const seen = new Set()
  const targets = []

  const add = (el, variant = 'up', delay = 0) => {
    if (!el || seen.has(el) || shouldSkipReveal(el)) return
    seen.add(el)
    el.classList.add('site-reveal', `site-reveal--${variant}`)
    el.style.setProperty('--reveal-delay', `${delay}ms`)
    targets.push(el)
  }

  document.querySelectorAll('.pbmit-title-bar-content-inner').forEach((el) => add(el, 'up', 40))

  document.querySelectorAll('#page section').forEach((section) => {
    if (section.classList.contains('pbmit-slider-area') || section.closest('.pbmit-slider-area')) return

    const cols = section.querySelectorAll(
      ':scope > .container > .row > [class*="col-"], :scope > .container-fluid > .row > [class*="col-"], :scope > .container > .about-page-intro-row > [class*="col-"]',
    )

    if (cols.length) {
      cols.forEach((col, i) => add(col, 'up', Math.min(i, 5) * 90))
    } else if (!section.hasAttribute('data-aos') && !section.classList.contains('fade-section')) {
      add(section, 'up', 0)
    }

    section
      .querySelectorAll(
        '.about-page-intro-card, .pbmit-ihbox-style-1, .pbmit-ihbox-style-10, .pbmit-service-style-1, .clients-page-card, .pbmit-portfolio-style-1, .pbminfotech-ele-fid',
      )
      .forEach((el, i) => {
        if (el.closest('.swiper-slide, .site-reveal')) return
        add(el, 'up', Math.min(i, 6) * 80)
      })
  })

  document
    .querySelectorAll('.site-footer .pbmit-footer-left, .site-footer .pbmit-footer-logo, .site-footer .pbmit-footer-widget')
    .forEach((el, i) => add(el, 'up', i * 70))

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-revealed')
        obs.unobserve(entry.target)
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -48px 0px' },
  )

  targets.forEach((el) => obs.observe(el))

  return {
    disconnect() {
      obs.disconnect()
      targets.forEach((el) => {
        el.classList.remove(
          'site-reveal',
          'site-reveal--up',
          'site-reveal--left',
          'site-reveal--right',
          'site-reveal--scale',
          'is-revealed',
        )
        el.style.removeProperty('--reveal-delay')
      })
    },
  }
}

function initGalleryReveal() {
  const items = document.querySelectorAll('.convey-tech-gallery .pbmit-portfolio-style-1')
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        obs.unobserve(entry.target)
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -48px 0px' },
  )
  items.forEach((el) => obs.observe(el))
  return obs
}

function initImageAnim() {
  const boxes = document.querySelectorAll(
    '.pbmit-animation-style1, .pbmit-animation-style2, .pbmit-animation-style3, .pbmit-animation-style4, .pbmit-animation-style5, .pbmit-animation-style6, .pbmit-animation-style7',
  )
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('active')
      })
    },
    { threshold: 0.3 },
  )
  boxes.forEach((b) => obs.observe(b))
  return obs
}

function stretchCols() {
  const windowWidth = window.innerWidth
  const container = document.querySelector('.container')
  const mainWidth = container ? container.offsetWidth : windowWidth
  const extra = windowWidth < 1200 ? 0 : (windowWidth - mainWidth) / 2
  document.querySelectorAll('.pbmit-col-stretched-yes').forEach((el) => {
    if (el.classList.contains('pbmit-col-right')) {
      const inner = el.querySelector('.pbmit-col-stretched-right')
      if (inner) inner.style.marginRight = `-${extra}px`
    } else {
      const inner = el.querySelector('.pbmit-col-stretched-left')
      if (inner) inner.style.marginLeft = `-${extra}px`
    }
  })
}

function initHoverActive() {
  const handlers = []
  document.querySelectorAll('.active-onhover').forEach((row) => {
    const items = row.querySelectorAll('.pbmit-miconheading-style-3, .pbmit-miconheading-style-37')
    const def = row.querySelector('.pbmit-miconheading-style-3:nth-child(2), .pbmit-miconheading-style-37:first-child')
    if (def) def.classList.add('pbmit-mihbox-hover-active')
    items.forEach((item) => {
      const enter = () => {
        items.forEach((i) => i.classList.remove('pbmit-mihbox-hover-active'))
        item.classList.add('pbmit-mihbox-hover-active')
      }
      const leave = () => {
        items.forEach((i) => i.classList.remove('pbmit-mihbox-hover-active'))
        if (def) def.classList.add('pbmit-mihbox-hover-active')
      }
      item.addEventListener('mouseover', enter)
      item.addEventListener('mouseout', leave)
      handlers.push(() => {
        item.removeEventListener('mouseover', enter)
        item.removeEventListener('mouseout', leave)
      })
    })
  })
  return () => handlers.forEach((fn) => fn())
}

function initAccordion() {
  const onClick = (e) => {
    const item = e.currentTarget
    item.parentElement.querySelectorAll('.accordion-item').forEach((i) => i.classList.remove('active'))
    const btn = item.querySelector('.accordion-button')
    if (btn && !btn.classList.contains('collapsed')) item.classList.add('active')
  }
  const items = document.querySelectorAll('.accordion .accordion-item')
  items.forEach((item) => item.addEventListener('click', onClick))
  return () => items.forEach((item) => item.removeEventListener('click', onClick))
}

function initPortfolioFilter() {
  const cleanups = []
  document.querySelectorAll('.pbmit-sortable-yes').forEach((root) => {
    const links = root.querySelectorAll('.pbmit-sortable-link')
    const articles = root.querySelectorAll('.pbmit-element-posts-wrapper > article')
    const onClick = (e) => {
      e.preventDefault()
      const sort = e.currentTarget.dataset.sortby
      links.forEach((l) => l.classList.remove('pbmit-selected'))
      e.currentTarget.classList.add('pbmit-selected')
      articles.forEach((a) => {
        a.style.display = sort === '*' || a.classList.contains(sort) ? '' : 'none'
      })
    }
    links.forEach((l) => l.addEventListener('click', onClick))
    cleanups.push(() => links.forEach((l) => l.removeEventListener('click', onClick)))
  })
  return () => cleanups.forEach((fn) => fn())
}

function initLightbox() {
  const onClick = (e) => {
    const target = e.target
    if (target.closest('.pbmit-react-lightbox')) return

    const trigger = target.closest(
      '.pbmin-lightbox-video, a.pbmit-lightbox, .convey-tech-gallery a.pbmit-link, .convey-tech-gallery .pbmit-featured-wrapper img'
    )
    if (!trigger) return

    let href = ''
    if (trigger.tagName === 'IMG') {
      href = trigger.src
    } else {
      href = trigger.getAttribute('href')
      if (!href || href === '#' || href === '/portfolio') {
        const innerImg =
          trigger.querySelector('img') ||
          trigger.closest('.pbminfotech-post-content')?.querySelector('img')
        if (innerImg?.src) {
          href = innerImg.src
        } else {
          return
        }
      }
    }
    if (!href) return

    e.preventDefault()

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const overlay = document.createElement('div')
    overlay.className = 'pbmit-react-lightbox'

    const closeBtn = document.createElement('button')
    closeBtn.type = 'button'
    closeBtn.className = 'pbmit-lightbox-close'
    closeBtn.setAttribute('aria-label', 'Close image')
    closeBtn.setAttribute('title', 'Close (Esc)')
    closeBtn.innerHTML = `
      <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    `

    const contentWrapper = document.createElement('div')
    contentWrapper.className = 'pbmit-lightbox-content'

    const isVideo =
      trigger.classList.contains('pbmin-lightbox-video') ||
      href.includes('youtube') ||
      href.includes('vimeo')

    if (isVideo) {
      const iframe = document.createElement('iframe')
      iframe.src = href
      iframe.className = 'pbmit-lightbox-iframe'
      iframe.allow = 'autoplay; fullscreen'
      contentWrapper.appendChild(iframe)
    } else {
      const img = document.createElement('img')
      img.src = href
      img.alt =
        trigger.querySelector('img')?.alt ||
        (trigger.tagName === 'IMG' ? trigger.alt : '') ||
        'Full size image view'
      img.className = 'pbmit-lightbox-img'
      contentWrapper.appendChild(img)
    }

    overlay.appendChild(closeBtn)
    overlay.appendChild(contentWrapper)

    let isClosing = false
    const close = () => {
      if (isClosing) return
      isClosing = true
      overlay.classList.add('is-closing')
      document.body.style.overflow = originalOverflow
      document.removeEventListener('keydown', onKey)
      setTimeout(() => {
        overlay.remove()
      }, 200)
    }

    const onKey = (ev) => {
      if (ev.key === 'Escape') close()
    }

    closeBtn.addEventListener('click', (ev) => {
      ev.stopPropagation()
      close()
    })

    overlay.addEventListener('click', (ev) => {
      if (ev.target === overlay || ev.target === contentWrapper) {
        close()
      }
    })

    document.addEventListener('keydown', onKey)
    document.body.appendChild(overlay)

    requestAnimationFrame(() => {
      overlay.classList.add('is-open')
    })
  }

  document.addEventListener('click', onClick)
  return () => {
    document.removeEventListener('click', onClick)
  }
}

export function useThemeEffects() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    AOS.init({
      once: true,
      duration: 800,
      offset: 70,
      easing: 'ease-out-cubic',
      disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    })
    const swipers = initSwipers()
    const counters = initCounters()
    const progress = initProgress()
    const fade = initFade()
    const siteReveals = initSiteReveals()
    const galleryReveal = initGalleryReveal()
    const imgAnim = initImageAnim()
    stretchCols()
    const onResize = () => stretchCols()
    window.addEventListener('resize', onResize)
    const hoverOff = initHoverActive()
    const accOff = initAccordion()
    const filterOff = initPortfolioFilter()
    const lightOff = initLightbox()
    AOS.refresh()

    return () => {
      swipers.forEach((s) => s.destroy(true, true))
      counters.forEach((o) => o.disconnect())
      progress.forEach((o) => o.disconnect())
      fade.disconnect()
      siteReveals.disconnect()
      galleryReveal.disconnect()
      imgAnim.disconnect()
      window.removeEventListener('resize', onResize)
      hoverOff()
      accOff()
      filterOff()
      lightOff()
      document.querySelectorAll('.pbmit-react-lightbox').forEach((n) => n.remove())
    }
  }, [pathname])
}
