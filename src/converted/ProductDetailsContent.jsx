import ProductSidebar from '../components/common/ProductSidebar'

function HighlightIcon() {
  return (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M96.81 372.885a46.429 46.429 0 1 0 46.38 46.37 46.421 46.421 0 0 0-46.38-46.37zm141.01 29.88a31.435 31.435 0 1 0 31.44 31.43 31.466 31.466 0 0 0-31.44-31.43zM505 412.205h-13.384V326.311a16.289 16.289 0 0 0-16.271-16.271H386.2a16.289 16.289 0 0 0-16.271 16.271v85.894H356.09V194.7a7 7 0 0 0-7-7H328.82V53.365a7 7 0 0 0-7-7h-27.3a7 7 0 0 0-7 7v152.57H63.9a7 7 0 0 0-7 7v27.27a7 7 0 0 0 7 7h12.27v142.33H58.65a41.277 41.277 0 0 0-37.52 23.13L4.49 356.675A40.6 40.6 0 0 0 0 375.575v52.33a7 7 0 0 0 7.01 7H505a7.01 7.01 0 0 0 7-7.01v-23.52a7 7 0 0 0-7-7.01z" />
    </svg>
  )
}

export default function ProductDetailsContent({ product }) {
  const accordionId = `accordion-${product.slug}`

  return (
    <>
      <div className="pbmit-title-bar-wrapper">
        <div className="container">
          <div className="pbmit-title-bar-content">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container">
                  <h3 className="pbmit-tbar-subtitle"> Product</h3>
                  <h1 className="pbmit-tbar-title"> {product.title}</h1>
                </div>
              </div>
              <div className="pbmit-breadcrumb">
                <div className="pbmit-breadcrumb-inner">
                  <span>
                    <a title="" href="#" className="home"><span>Home</span></a>
                  </span>
                  <span className="sep"></span>
                  <span><span className="post-root post post-post current-item"> {product.title}</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content" id="page">
        <section className="site-content service-details">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-xl-3 service-left-col sidebar">
                <ProductSidebar />
              </div>
              <div className="col-md-12 col-xl-9 service-right-col">
                <div className="pbmit-short-description">
                  <div className="pbmit-custom-heading">
                    <h3 className="pbmit-title">{product.title}</h3>
                  </div>
                  {(product.paragraphs ?? []).map((html, index) => (
                    <p key={index} dangerouslySetInnerHTML={{ __html: html }} />
                  ))}
                </div>
                <div className="pbmit-service-feature-image">
                  <img src={product.listingImage || '/images/service/service-single-01.jpg'} alt={product.title} />
                </div>
                <div data-aos="fade-up" data-aos-duration="800">
                  <div className="pbmit-custom-heading">
                    <h3 className="pbmit-title">{product.whyTitle}</h3>
                  </div>
                  <p className="pb-3">{product.whyIntro}</p>
                  <div className="pbmit-ihbox-style-4-area">
                    <div className="row pbminfotech-gap-35px">
                      {(product.highlights ?? []).map((item) => (
                        <div className="pbmit-miconheading-style-4 col-md-6" key={item.title}>
                          <div className="pbmit-ihbox-style-4">
                            <div className="pbmit-ihbox-box">
                              <div className="pbmit-ihbox-icon">
                                <div className="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon">
                                  <HighlightIcon />
                                </div>
                              </div>
                              <div className="pbmit-ihbox-contents">
                                <h2 className="pbmit-element-title">{item.title}</h2>
                                <div className="pbmit-heading-desc">{item.desc}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="800">
                  <div className="pbmit-custom-heading">
                    <h3 className="pbmit-title">{product.listTitle}</h3>
                  </div>
                  <ul className="list-group">
                    {(product.listItems ?? []).map((text) => (
                      <li className="list-group-item" key={text}>
                        <span className="pbmit-icon-list-icon">
                          <i className="pbmit-base-icon-checkbox"></i>
                        </span>
                        <span className="pbmit-icon-list-text">{text}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="row pt-5">
                    <div className="col-md-12 col-xl-6">
                      <div className="service-single-02-img"></div>
                    </div>
                    <div className="col-md-12 col-xl-6 ps-xl-4 mt-xl-0 mt-5">
                      <div className="pbmit-custom-heading">
                        <h3 className="pbmit-title">Frequently asked questions</h3>
                      </div>
                      <div className="accordion" id={accordionId}>
                        {(product.faqs ?? []).map((faq, index) => {
                          const collapseId = `${product.slug}-faq-${index}`
                          const headingId = `${product.slug}-heading-${index}`
                          const isFirst = index === 0
                          return (
                            <div className={`accordion-item${isFirst ? ' active' : ''}`} key={faq.q}>
                              <h2 className="accordion-header" id={headingId}>
                                <button
                                  className={`accordion-button${isFirst ? '' : ' collapsed'}`}
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#${collapseId}`}
                                  aria-expanded={isFirst ? 'true' : 'false'}
                                  aria-controls={collapseId}
                                >
                                  <span className="pbmit-accordion-title">{faq.q}</span>
                                  <span className="pbmit-accordion-icon">
                                    <span className="pbmit-accordion-icon-opened">
                                      <svg aria-hidden="true" className="e-font-icon-svg e-fas-minus" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                                    </span>
                                    <span className="pbmit-accordion-icon-closed">
                                      <svg aria-hidden="true" className="e-font-icon-svg e-fas-plus" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                                    </span>
                                  </span>
                                </button>
                              </h2>
                              <div
                                id={collapseId}
                                className={`accordion-collapse collapse${isFirst ? ' show' : ''}`}
                                aria-labelledby={headingId}
                                data-bs-parent={`#${accordionId}`}
                              >
                                <div className="accordion-body">{faq.a}</div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
