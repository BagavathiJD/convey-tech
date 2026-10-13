import { useScrollTop } from '../../hooks/useScroll'

export default function ScrollToTop() {
  const { active, scrollToTop } = useScrollTop()
  return (
    <div className={`pbmit-backtotop${active ? ' active' : ''}`} onClick={scrollToTop} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && scrollToTop()}>
      <div className="pbmit-arrow">
        <i className="pbmit-base-icon-up-open-big"></i>
      </div>
      <div className="pbmit-hover-arrow">
        <i className="pbmit-base-icon-up-open-big"></i>
      </div>
    </div>
  )
}
