import { useEffect, useRef } from 'react'
import '../../styles/presence.css'

const stops = [
  {
    idx: '01 — CHENNAI',
    title: (
      <>
        Tamil Nadu
        <br />
        Manufacturing Hub
      </>
    ),
    text: 'Manufacturing facilities at Kattur Industrial Area and Kakkalur Industrial Area.',
    tags: ['Tamil Nadu', 'Kerala', 'Karnataka'],
  },
  {
    idx: '02 — HYDERABAD',
    title: (
      <>
        Telangana
        <br />
        Manufacturing Hub
      </>
    ),
    text: 'Branch office and manufacturing unit at Jeedimetla Industrial Area.',
    tags: ['Andhra Pradesh', 'Maharashtra', 'Odisha'],
  },
  {
    idx: '03 — AHMEDABAD',
    title: (
      <>
        Gujarat
        <br />
        Manufacturing Hub
      </>
    ),
    text: 'Manufacturing facility at Vatva Industrial Area, enabling efficient service.',
    tags: ['North India Region'],
  },
  {
    idx: '04 — SALES NETWORK',
    title: 'Mumbai & Jaipur',
    text: 'Sales offices strengthening customer support, market reach and service network.',
    tags: ['Mumbai', 'Jaipur'],
  },
]

export default function PresenceSection() {
  const routeRef = useRef(null)

  useEffect(() => {
    const route = routeRef.current
    if (!route) return undefined
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            route.classList.add('in-view')
            io.disconnect()
          }
        })
      },
      { threshold: 0.25 },
    )
    io.observe(route)
    return () => io.disconnect()
  }, [])

  return (
    <section className="ct-presence" aria-labelledby="presence-headline">
      <div className="blueprint-grid"></div>

      <div className="presence-header">
        <div>
          <div className="eyebrow">Our Presence</div>
          <h2 className="headline" id="presence-headline">
            Built to Serve.
            <br />
            Positioned to Deliver.
          </h2>
        </div>
        <p>
          With strategically located manufacturing facilities and sales offices across India, ConveyTech Group is
          equipped to deliver reliable solutions and responsive support to customers across multiple regions.
        </p>

        <svg className="compass" viewBox="0 0 120 120" fill="none" aria-hidden="true">
          <circle cx="60" cy="60" r="58" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
          <circle cx="60" cy="60" r="40" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
          <line x1="60" y1="2" x2="60" y2="18" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" />
          <line x1="60" y1="102" x2="60" y2="118" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" />
          <line x1="2" y1="60" x2="18" y2="60" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" />
          <line x1="102" y1="60" x2="118" y2="60" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" />
          <path d="M60 30 L68 60 L60 90 L52 60 Z" fill="#f5c518" />
          <circle cx="60" cy="60" r="3" fill="#ffffff" />
        </svg>
      </div>

      <div className="route" ref={routeRef}>
        <div className="route-line-wrap">
          <div className="route-line-bg"></div>
          <div className="route-line-fg"></div>
        </div>

        <div className="stops">
          {stops.map((stop) => (
            <div className="stop" key={stop.idx}>
              <div className="stem"></div>
              <div className="node"></div>
              <div className="presence-card">
                <div className="idx">{stop.idx}</div>
                <h3>{stop.title}</h3>
                <p>{stop.text}</p>
                <div className="tags">
                  {stop.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </section>
  )
}
