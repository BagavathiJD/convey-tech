import { Link, useParams } from 'react-router-dom'
import { navItems, site } from '../../data/siteData'

export default function ProductSidebar() {
  const { slug } = useParams()
  const products = navItems.find((item) => item.label === 'Products')?.children ?? []

  return (
    <aside className="service-sidebar">
      <aside className="widget post-list">
        <div className="all-post-list">
          <ul>
            {products.map((item) => {
              const itemSlug = item.to.split('/').filter(Boolean).pop()
              const conveyorSlugs = ['aggregate-feeding-belt-conveyors', 'machine-analysis']
              const isConveyor = conveyorSlugs.includes(itemSlug)
              const isActive = slug
                ? itemSlug === slug || (isConveyor && conveyorSlugs.includes(slug))
                : isConveyor
              return (
                <li key={item.to} className={isActive ? 'post-active' : undefined}>
                  <Link to={item.to}> {item.label} </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </aside>
      <aside className="widget pbmit-service-ad">
        <div className="textwidget">
          <div className="pbmit-blog-ads-box">
            <h5 className="pbmit-ad-subheading">WE ARE BEST</h5>
            <h4 className="pbmit-ad-heading">Manufacturing for <span className="pbmit-global-color"> Better Tomorrow</span></h4>
            <div className="pbmit-ad-button" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href={site.phoneHref}>
                <span className="pbmit-button-text">6381108876</span>
              </a>
              <a href={site.phoneSecondaryHref}>
                <span className="pbmit-button-text">6379801161</span>
              </a>
            </div>
          </div>
        </div>
      </aside>
     
    </aside>
  )
}
