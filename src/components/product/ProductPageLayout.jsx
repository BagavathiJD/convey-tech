import ProductSidebar from '../common/ProductSidebar'
import ProductLightboxImage from '../ui/ProductLightboxImage'

const iconSvgs = [
  <svg key="a" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m490.9 465.985h-52.67a11.985 11.985 0 0 0 11.34-11.87v-33.57h-178.67v33.57a11.886 11.886 0 0 0 11.88 11.87h-201.025a5.025 5.025 0 0 0 -.54-.08 20.92 20.92 0 0 1 -18.81-20.64v-52.55h194.495v-14.01h-194.495v-168.94h268.87v12.7h14v-79.26a34.752 34.752 0 0 0 -34.72-34.72h-49.607v-20.894a7 7 0 0 0 -7-7h-114.21a7 7 0 0 0 -7 7v20.894h-49.6a34.761 34.761 0 0 0 -34.73 34.72v302.06a34.514 34.514 0 0 0 6.98 20.72h-34.283a7.008 7.008 0 0 0 -7 7v25.015a7.008 7.008 0 0 0 7 7h469.795a7 7 0 0 0 7-7v-25.01a7 7 0 0 0 -7-7.005zm-344.16-371.392h100.2v13.892h-100.2zm-63.6 27.892h227.42a20.75 20.75 0 0 1 20.72 20.72v52.56h-268.875v-52.56a20.752 20.752 0 0 1 20.73-20.72zm400.76 368.5h-455.795v-10.985h455.795z"></path></svg>,
  <svg key="b" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m464.466 169.1h-13v-22.091a6.574 6.574 0 0 0 -6.565-6.574h-184.913a6.568 6.568 0 0 0 -6.564 6.574v97.191l13.129 5.457v-13.519h171.785v24.262v44.7v44.7v44.682v44.7v13.891h-85.18v-154.057l-147.975-61.51-23.285-9.678v225.465h-152.298v-333.293l81.916 34.042 89.193 37.062v30.319l13.131 5.458v-40.157a6.574 6.574 0 0 0 -4.042-6.067l-35.843-14.893-6.125-87.037a9.893 9.893 0 0 0 7.672-9.63v-15.212a9.9 9.9 0 0 0 -9.885-9.884h-50.219a9.9 9.9 0 0 0 -9.884 9.884v15.212a9.9 9.9 0 0 0 9.143 9.856l-6.574 59.437-83.229-34.586a6.573 6.573 0 0 0 -9.088 6.068v349.7a6.567 6.567 0 0 0 6.565 6.565h422.409a6.572 6.572 0 0 0 6.565-6.565v-13.981h31.473v13.98a6.567 6.567 0 1 0 13.133 0v-259.8a31.645 31.645 0 0 0 -31.605-31.6z"></path></svg>,
  <svg key="c" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M96.81,372.885a46.429,46.429,0,0,0-46.38,46.37A46.372,46.372,0,0,0,142.61,419.255,46.421,46.421,0,0,0,96.81,372.885ZM505,412.205H491.616V326.311a16.289,16.289,0,0,0-16.271-16.271H386.2a16.289,16.289,0,0,0-16.271,16.271v85.894H356.09V194.7a7,7,0,0,0-7-7H328.82V53.365a7,7,0,0,0-7-7h-27.3a7,7,0,0,0-7,7v152.57H63.9a7,7,0,0,0-7,7v27.27a7,7,0,0,0,7,7H76.17v142.33H58.65a41.277,41.277,0,0,0-37.52,23.13L4.49,356.675A40.6,40.6,0,0,0,0,375.575v52.33a7,7,0,0,0,7.01,7H505a7.01,7.01,0,0,0,7-7.01v-23.52A7,7,0,0,0,505,412.205Z"></path></svg>,
  <svg key="d" viewBox="0 0 55 55" xmlns="http://www.w3.org/2000/svg"><path d="m50.15 15.36c-.04-1.06-1.02-1.82-2.03-1.65l-5.16.85c-.48.08-.89.34-1.16.74l-5.54-3.53c-1.87-1.19-4.09-1.6-6.25-1.15-2.44.03-5.87 2.35-8.32 4.28-.57.45-1.18.81-1.83 1.08l-5.08-.76c-.95-.14-1.89.53-2 1.56l-1.59 15.87c-.09.9.51 1.71 1.39 1.89l3.47.7 2.72-.59c.84-.18 1.42-.93 1.38-1.79z"></path></svg>,
]

function AccordionIcon() {
  return (
    <span className="pbmit-accordion-icon">
      <span className="pbmit-accordion-icon-opened">
        <svg aria-hidden="true" className="e-font-icon-svg e-fas-minus" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
      </span>
      <span className="pbmit-accordion-icon-closed">
        <svg aria-hidden="true" className="e-font-icon-svg e-fas-plus" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
      </span>
    </span>
  )
}

export default function ProductPageLayout({
  idPrefix,
  title,
  paragraphs,
  imageAlt,
  whyTitle,
  whyIntro,
  features,
  listTitle,
  listItems,
  faqs,
}) {
  const accordionId = `accordion-${idPrefix}`

  return (
    <>
      <div className="pbmit-title-bar-wrapper">
        <div className="container">
          <div className="pbmit-title-bar-content">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container">
                  <h3 className="pbmit-tbar-subtitle"> Product</h3>
                  <h1 className="pbmit-tbar-title"> {title}</h1>
                </div>
              </div>
              <div className="pbmit-breadcrumb">
                <div className="pbmit-breadcrumb-inner">
                  <span>
                    <a title="" href="#" className="home"><span>Home</span></a>
                  </span>
                  <span className="sep"></span>
                  <span><span className="post-root post post-post current-item"> {title}</span></span>
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
                    <h3 className="pbmit-title">{title}</h3>
                  </div>
                  {paragraphs.map((text) => (
                    <p key={text.slice(0, 40)}>{text}</p>
                  ))}
                </div>
                <div className="pbmit-service-feature-image">
                  <ProductLightboxImage src="/images/service/service-single-01.jpg" alt={imageAlt || title} />
                </div>
                <div data-aos="fade-up" data-aos-duration="800">
                  <div className="pbmit-custom-heading">
                    <h3 className="pbmit-title">{whyTitle}</h3>
                  </div>
                  <p className="pb-3">{whyIntro}</p>
                  <div className="pbmit-ihbox-style-4-area">
                    <div className="row pbminfotech-gap-35px">
                      {features.map((feature, index) => (
                        <div className="pbmit-miconheading-style-4 col-md-6" key={feature.title}>
                          <div className="pbmit-ihbox-style-4">
                            <div className="pbmit-ihbox-box">
                              <div className="pbmit-ihbox-icon">
                                <div className="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon">
                                  {iconSvgs[index % iconSvgs.length]}
                                </div>
                              </div>
                              <div className="pbmit-ihbox-contents">
                                <h2 className="pbmit-element-title">{feature.title}</h2>
                                <div className="pbmit-heading-desc">{feature.desc}</div>
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
                    <h3 className="pbmit-title">{listTitle}</h3>
                  </div>
                  <ul className="list-group">
                    {listItems.map((item) => (
                      <li className="list-group-item" key={item}>
                        <span className="pbmit-icon-list-icon">
                          <i className="pbmit-base-icon-checkbox"></i>
                        </span>
                        <span className="pbmit-icon-list-text">{item}</span>
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
                        {faqs.map((faq, index) => {
                          const headingId = `${idPrefix}-heading-${index}`
                          const collapseId = `${idPrefix}-collapse-${index}`
                          const open = index === 0
                          return (
                            <div className={`accordion-item${open ? ' active' : ''}`} key={faq.q}>
                              <h2 className="accordion-header" id={headingId}>
                                <button
                                  className={`accordion-button${open ? '' : ' collapsed'}`}
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#${collapseId}`}
                                  aria-expanded={open}
                                  aria-controls={collapseId}
                                >
                                  <span className="pbmit-accordion-title">
                                    {String(index + 1).padStart(2, '0')}. {faq.q}
                                  </span>
                                  <AccordionIcon />
                                </button>
                              </h2>
                              <div
                                id={collapseId}
                                className={`accordion-collapse collapse${open ? ' show' : ''}`}
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
