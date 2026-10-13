import Breadcrumb from './Breadcrumb'

export default function TitleBar({ title, subtitle, crumbs }) {
  return (
    <div className="pbmit-title-bar-wrapper">
      <div className="container">
        <div className="pbmit-title-bar-content">
          <div className="pbmit-title-bar-content-inner">
            <div className="pbmit-tbar">
              <div className="pbmit-tbar-inner container">
                {subtitle ? <h3 className="pbmit-tbar-subtitle">{subtitle}</h3> : null}
                <h1 className="pbmit-tbar-title">{title}</h1>
              </div>
            </div>
            <Breadcrumb items={crumbs} />
          </div>
        </div>
      </div>
    </div>
  )
}
