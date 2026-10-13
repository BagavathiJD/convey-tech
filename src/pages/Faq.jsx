import Seo from '../components/common/Seo'
import TitleBar from '../components/common/TitleBar'

const faqs = [
  {
    q: '01. How do you ensure product quality?',
    a: 'We maintain strict quality control at every stage of the process, carefully sourcing raw materials, components through to thorough final inspection.',
  },
  {
    q: '02. Do you offer customized solutions?',
    a: 'We maintain strict quality control at every stage of the process, carefully sourcing raw materials, components through to thorough final inspection.',
  },
  {
    q: '03. What sustainability practices do you follow?',
    a: 'We maintain strict quality control at every stage of the process, carefully sourcing raw materials, components through to thorough final inspection.',
  },
  {
    q: '04. How do you handle safety in the workplace?',
    a: 'We maintain strict quality control at every stage of the process, carefully sourcing raw materials, components through to thorough final inspection.',
  },
]

export default function Faq() {
  return (
    <>
      <Seo title="FAQ" description="Frequently asked questions about Convey Tech services." />
      <TitleBar
        title="Faq"
        crumbs={[
          { label: 'Induyst', to: '/' },
          { label: ' Faq' },
        ]}
      />
      <div className="page-content">
        <section className="section-lg">
          <div className="container">
            <div className="accordion" id="faqAccordion">
              {faqs.map((item, index) => {
                const id = `faq-${index}`
                const open = index === 0
                return (
                  <div className={`accordion-item${open ? ' active' : ''}`} key={id}>
                    <h2 className="accordion-header" id={`heading-${id}`}>
                      <button
                        className={`accordion-button${open ? '' : ' collapsed'}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${id}`}
                        aria-expanded={open}
                        aria-controls={`collapse-${id}`}
                      >
                        <span className="pbmit-accordion-title">{item.q}</span>
                      </button>
                    </h2>
                    <div
                      id={`collapse-${id}`}
                      className={`accordion-collapse collapse${open ? ' show' : ''}`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">{item.a}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
