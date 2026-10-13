import { useState } from 'react'
import { products } from '../../data/products'

const enquirySubjects = [
  ...products.map((product) => product.title),
  'Spares and After-Sales Support',
  'General Enquiry',
]

const initial = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  consent: false,
}

export default function ContactForm({ className = 'contact-form left-box', submitLabel = 'Send Enquiry' }) {
  const [formData, setFormData] = useState(initial)
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')
    try {
      const res = await fetch('/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('Thank you. Your message has been sent.')
      setFormData(initial)
    } catch {
      setStatus('Frontend form is ready. Connect /api/contact.php (or another endpoint) to deliver messages. The original theme posted to send-dummy.php.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className={className} method="post" onSubmit={handleSubmit} noValidate={false}>
      <div className="row">
        <div className="col-md-6">
          <input type="text" className="form-control" placeholder="Full Name *" name="name" required value={formData.name} onChange={handleChange} />
        </div>
        <div className="col-md-6">
          <input type="email" className="form-control" placeholder="Work Email *" name="email" required value={formData.email} onChange={handleChange} />
        </div>
        <div className="col-md-6">
          <input type="tel" className="form-control" placeholder="Phone Number *" name="phone" required value={formData.phone} onChange={handleChange} />
        </div>
        <div className="col-md-6">
          <select
            className="form-control contact-subject-select"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            aria-label="Select subject"
          >
            <option value="" disabled>
              Select Subject *
            </option>
            {enquirySubjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-12">
          <textarea name="message" cols="40" rows="10" className="form-control" placeholder="Your Message *" required value={formData.message} onChange={handleChange}></textarea>
        </div>

      </div>
      <button className="pbmit-btn" type="submit" disabled={loading}>
        <span className={`form-btn-loader${loading ? '' : ' d-none'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100">
            <circle fill="#fff" stroke="#fff" strokeWidth="15" r="15" cx="40" cy="50">
              <animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate>
            </circle>
            <circle fill="#fff" stroke="#fff" strokeWidth="15" r="15" cx="100" cy="50">
              <animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate>
            </circle>
            <circle fill="#fff" stroke="#fff" strokeWidth="15" r="15" cx="160" cy="50">
              <animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate>
            </circle>
          </svg>
        </span>
        <span className="pbmit-button-content-wrapper">
          <span className="pbmit-button-icon">
            <i className="pbmit-induyst-icon pbmit-induyst-icon-next"></i>
          </span>
          <span className="pbmit-button-text">{submitLabel}</span>
        </span>
      </button>
      <div className="col-md-12 col-lg-12 message-status mt-3">{status}</div>
    </form>
  )
}
