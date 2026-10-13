import { Link } from 'react-router-dom'
import ContactForm from '../components/sections/ContactForm'

export default function ContactContent() {
	return (
		<>
			{/* Title Bar */}
			<div className="pbmit-title-bar-wrapper">
				<div className="container">
					<div className="pbmit-title-bar-content">
						<div className="pbmit-title-bar-content-inner">
							<div className="pbmit-tbar">
								<div className="pbmit-tbar-inner container">
									<h1 className="pbmit-tbar-title"> Contact Us</h1>
								</div>
							</div>
							<div className="pbmit-breadcrumb">
								<div className="pbmit-breadcrumb-inner">
									<span>
										<Link to="/" className="home"><span>Home</span></Link>
									</span>
									<span className="sep"></span>
									<span><span className="post-root post post-post current-item"> Contact Us</span></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Title Bar End*/}

			{/* Contact Us Content */}
			<div className="page-content">

				{/* Contact Form */}
				<section className="contact-us-section fade-section">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-md-12 col-xl-6">
								<div className="pbmit-heading-subheading">
									<h4 className="pbmit-subtitle">Send an enquiry</h4>
									<h2 className="pbmit-title">How can we help?</h2>
									<div className="pbmit-heading-desc">Select a product or service below and our team will respond with the right specification and support.</div>
								</div>
							</div>

						</div>
						<div className="row pt-3">

							<div className="col-md-6 full-width-1200">
								<div className="contact-form-right-box pbmit-bg-color-secondary">
									<div className="row pbminfotech-gap-20px">
										<article className="pbmit-miconheading-style-7 col-md-6">
											<div className="pbmit-ihbox-style-7">
												<div className="pbmit-ihbox-box">
													<div className="pbmit-ihbox-wrap">
														<div className="pbmit-ihbox-icon">
															<div className="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon">
																<svg id="pbmit_06" enableBackground="new 0 0 100 100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
																	<path d="m10.5916214 14.8561211c-1.8151474 0-3.4553409.6123381-4.8112335 1.6183224l40.6111831 38.9053859c1.902626 1.8151512 4.854969 1.8151512 6.7575951 0l40.8298836-39.1240768c-1.2902832-.8747683-2.8430023-1.3996325-4.5269318-1.3996325z"></path>
																	<path d="m97.5 77.095993v-54.1919899c0-1.3777599-.3717728-2.668047-1.0059814-3.8052483l-32.2571488 30.9012414 32.2352753 30.9012489c.6342087-1.137207 1.0278549-2.4274902 1.0278549-3.8052521z"></path>
																	<path d="m55.7734795 58.1134834c-1.6839333 1.6183281-3.8489876 2.4274902-5.9921722 2.4274902s-4.3301125-.8091621-5.9921722-2.4274902l-5.7297401-5.4891815-32.2790071 30.9012489c1.3558927 1.0059891 2.9960861 1.6183319 4.8112335 1.6183319h78.8604965c1.6839294 0 3.2366486-.5248642 4.5269318-1.3996353l-32.4758339-31.1199379z"></path>
																	<path d="m2.5000014 22.9040031v54.1701241c0 1.2684174.3280377 2.4493484.8310313 3.4990768l31.9509659-30.5732079-31.9290959-30.5950717c-.5248614 1.0715923-.8529013 2.252533-.8529013 3.4990787z"></path>
																</svg>
															</div>
														</div>
														<h2 className="pbmit-element-title">
															Mail us 24/7
														</h2>
													</div>
													<div className="pbmit-ihbox-contents">
														<div className="pbmit-heading-desc">
															<a href="mailto:conveytech@yahoo.co.in">conveytech@yahoo.co.in</a><br />
														</div>
													</div>
												</div>
											</div>
										</article>
										<article className="pbmit-miconheading-style-7 col-md-6">
											<div className="pbmit-ihbox-style-7">
												<div className="pbmit-ihbox-box">
													<div className="pbmit-ihbox-wrap">
														<div className="pbmit-ihbox-icon">
															<div className="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon">
																<svg clipRule="evenodd" fillRule="evenodd" height="512" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><g id="Icon"><path d="m12 1.25c-3.723 0-6.75 3.054-6.75 6.821 0 1.276.562 2.859 1.38 4.438 1.801 3.477 4.801 6.979 4.801 6.979.142.166.35.262.569.262s.427-.096.569-.262c0 0 3-3.502 4.801-6.979.818-1.579 1.38-3.162 1.38-4.438 0-3.767-3.027-6.821-6.75-6.821zm0 4c-1.518 0-2.75 1.232-2.75 2.75s1.232 2.75 2.75 2.75 2.75-1.232 2.75-2.75-1.232-2.75-2.75-2.75z"></path><path d="m16.784 17.377c.813.244 1.483.546 1.946.9.3.228.52.451.52.723 0 .16-.091.305-.219.45-.212.239-.527.454-.917.654-1.378.705-3.606 1.146-6.114 1.146s-4.736-.441-6.114-1.146c-.39-.2-.705-.415-.917-.654-.128-.145-.219-.29-.219-.45 0-.272.22-.495.52-.723.463-.354 1.133-.656 1.946-.9.396-.119.621-.538.502-.934-.119-.397-.538-.622-.934-.503-1.238.373-2.2.884-2.778 1.449-.508.495-.756 1.049-.756 1.611 0 .702.397 1.402 1.204 1.986 1.416 1.024 4.26 1.764 7.546 1.764s6.13-.74 7.546-1.764c.807-.584 1.204-1.284 1.204-1.986 0-.562-.248-1.116-.756-1.611-.578-.565-1.54-1.076-2.778-1.449-.396-.119-.815.106-.934.503-.119.396.106.815.502.934z"></path></g></svg>
															</div>
														</div>
														<h2 className="pbmit-element-title">
															Our Location
														</h2>
													</div>
													<div className="pbmit-ihbox-contents">
														<div className="pbmit-heading-desc">
															No.67, F2, Vaishnavi Jeswanth Apartments<br />
															Ambattur, Chennai 600053
														</div>
													</div>
												</div>
											</div>
										</article>
										<article className="pbmit-miconheading-style-7 col-md-6">
											<div className="pbmit-ihbox-style-7">
												<div className="pbmit-ihbox-box">
													<div className="pbmit-ihbox-wrap">
														<div className="pbmit-ihbox-icon">
															<div className="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon">
																<svg id="Layer_3" height="512" viewBox="0 0 32 32" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 3"><path d="m29.393 23.36c-.874-.733-6-3.979-6.852-3.83-.4.071-.706.412-1.525 1.389a11.687 11.687 0 0 1 -1.244 1.347 10.757 10.757 0 0 1 -2.374-.88 14.7 14.7 0 0 1 -6.784-6.786 10.757 10.757 0 0 1 -.88-2.374 11.687 11.687 0 0 1 1.347-1.244c.976-.819 1.318-1.123 1.389-1.525.149-.854-3.1-5.978-3.83-6.852-.306-.362-.584-.605-.94-.605-1.032 0-5.7 5.772-5.7 6.52 0 .061.1 6.07 7.689 13.791 7.721 7.589 13.73 7.689 13.791 7.689.748 0 6.52-4.668 6.52-5.7 0-.356-.243-.634-.607-.94z"></path><path d="m23 15h2a8.009 8.009 0 0 0 -8-8v2a6.006 6.006 0 0 1 6 6z"></path><path d="m28 15h2a13.015 13.015 0 0 0 -13-13v2a11.013 11.013 0 0 1 11 11z"></path></svg>
															</div>
														</div>
														<h2 className="pbmit-element-title">
															Call US 24/7
														</h2>
													</div>
													<div className="pbmit-ihbox-contents">
														<div className="pbmit-heading-desc">
															<a href="tel:+916381108876">6381108876</a> / Phone:No <a href="tel:+916379801161">6379801161</a>
														</div>
													</div>
												</div>
											</div>
										</article>
										<article className="pbmit-miconheading-style-7 col-md-6">
											<div className="pbmit-ihbox-style-7">
												<div className="pbmit-ihbox-box">
													<div className="pbmit-ihbox-wrap">
														<div className="pbmit-ihbox-icon">
															<div className="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon">
																<svg version="1.1" id="pbmit_003" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="484.951px" height="484.951px" viewBox="0 0 484.951 484.951" style={{ enableBackground: "new 0 0 484.951 484.951" }} xmlSpace="preserve"><g><g id="_x31_5_38_"><g><path d="M118.505,115.332h6.938c10.544,0,19.091-8.55,19.091-19.091V43.558V23.852c0-10.541-8.547-19.09-19.091-19.09h-6.938 c-10.543,0-19.09,8.549-19.09,19.09v19.707v52.682C99.415,106.782,107.962,115.332,118.505,115.332z"></path><path d="M363.373,114.859h6.938c10.543,0,19.09-8.549,19.09-19.091v-57.21v-15.18c0-10.54-8.547-19.089-19.09-19.089h-6.938 c-10.545,0-19.092,8.549-19.092,19.089v15.18v57.209C344.283,106.31,352.83,114.859,363.373,114.859z"></path><path d="M453.916,43.558H404.92v57.209c0,19.084-15.525,29.61-34.607,29.61h-6.938c-19.084,0-34.609-15.526-34.609-34.61V43.558 H160.053V96.24c0,19.084-15.525,34.61-34.609,34.61h-6.938c-19.083,0-34.608-15.526-34.608-34.61V43.558H31.036 C13.923,43.558,0,57.481,0,74.595v375.03c0,17.114,13.923,31.037,31.036,31.037h422.88c17.113,0,31.035-13.923,31.035-31.037 V74.595C484.953,57.482,471.029,43.558,453.916,43.558z M453.916,449.625H31.037l-0.001-283.213h422.886l0.016,283.212 C453.936,449.624,453.93,449.625,453.916,449.625z"></path><path d="M258.498,261.41h55.727c2.209,0,4-1.791,4-4v-48.255c0-2.209-1.791-4-4-4h-55.727c-2.209,0-4,1.791-4,4v48.255 C254.498,259.619,256.289,261.41,258.498,261.41z"></path><path d="M349.443,261.41h55.727c2.209,0,4-1.791,4-4v-48.255c0-2.209-1.791-4-4-4h-55.727c-2.209,0-4,1.791-4,4v48.255 C345.443,259.619,347.234,261.41,349.443,261.41z"></path><path d="M76.611,340.41h55.726c2.209,0,4-1.791,4-4v-48.256c0-2.209-1.791-4-4-4H76.611c-2.209,0-4,1.791-4,4v48.256 C72.611,338.619,74.402,340.41,76.611,340.41z"></path><path d="M167.555,340.41h55.726c2.209,0,4-1.791,4-4v-48.256c0-2.209-1.791-4-4-4h-55.726c-2.209,0-4,1.791-4,4v48.256 C163.555,338.619,165.346,340.41,167.555,340.41z"></path><path d="M258.499,340.41h55.726c2.209,0,4-1.791,4-4v-48.256c0-2.209-1.791-4-4-4h-55.726c-2.209,0-4,1.791-4,4v48.256 C254.499,338.619,256.29,340.41,258.499,340.41z"></path><path d="M349.443,340.41h55.727c2.209,0,4-1.791,4-4v-48.256c0-2.209-1.791-4-4-4h-55.727c-2.209,0-4,1.791-4,4v48.256 C345.443,338.619,347.234,340.41,349.443,340.41z"></path><path d="M132.337,363.154H76.612c-2.209,0-4,1.791-4,4v48.256c0,2.209,1.791,4,4,4h55.726c2.209,0,4-1.791,4-4v-48.256 C136.337,364.945,134.546,363.154,132.337,363.154z"></path><path d="M223.282,363.154h-55.726c-2.209,0-4,1.791-4,4v48.256c0,2.209,1.791,4,4,4h55.726c2.209,0,4-1.791,4-4v-48.256 C227.282,364.945,225.491,363.154,223.282,363.154z"></path><path d="M314.227,363.154H258.5c-2.209,0-4,1.791-4,4v48.256c0,2.209,1.791,4,4,4h55.727c2.209,0,4-1.791,4-4v-48.256 C318.227,364.945,316.436,363.154,314.227,363.154z"></path><path d="M405.17,363.154h-55.727c-2.209,0-4,1.791-4,4v48.256c0,2.209,1.791,4,4,4h55.727c2.209,0,4-1.791,4-4v-48.256 C409.17,364.945,407.379,363.154,405.17,363.154z"></path></g></g></g></svg>
															</div>
														</div>
														<h2 className="pbmit-element-title">
															Working Days
														</h2>
													</div>
													<div className="pbmit-ihbox-contents">
														<div className="pbmit-heading-desc">Mon to Sat - 09am to 06pm <br />
															Sunday - Closed
														</div>
													</div>
												</div>
											</div>
										</article>
									</div>

								</div>
							</div>

							<div className="col-md-6 full-width-1200">
								<ContactForm />
							</div>
						</div>
					</div>
				</section>
				{/* Contact Form End */}

				<section className="contact-offices-section section-lgb fade-section">
					<div className="container">
						<div className="pbmit-heading-subheading text-center">
							<h4 className="pbmit-subtitle">Our Offices</h4>
							<h2 className="pbmit-title">Reach Conveytech across India</h2>
						</div>
						<div className="row g-4">
							<div className="col-md-12 col-lg-4">
								<div className="contact-office-card">
									<span className="contact-office-label">Head Office</span>
									<h3>Chennai</h3>
									<p>
										No.67, F2, Vaishnavi Jeswanth Apartments<br />
										Chozhambedu Road, Opp. Samuel Harris School<br />
										Ambattur, Chennai 600053<br />
										Tamil Nadu, India.
									</p>
									<p>
										<strong>Phone:</strong> <a href="tel:+916381108876">6381108876</a><br />
										<strong>Telefax:</strong> <a href="tel:+916379801161">6379801161</a><br />
										<strong>Website:</strong> <a href="https://www.conveytechgroup.com" target="_blank" rel="noreferrer">www.conveytechgroup.com</a><br />
										<strong>E-Mail:</strong> <a href="mailto:conveytech@yahoo.co.in">conveytech@yahoo.co.in</a>
									</p>
								</div>
							</div>
							<div className="col-md-12 col-lg-4">
								<div className="contact-office-card contact-person-card">
									<span className="contact-office-label">Chennai Region</span>
									<h3>Mrs. Anupriya</h3>
									<p><strong>Ph:</strong> <a href="tel:+916381108876">6381108876</a></p>
								</div>
							</div>

							<div className="col-md-12 col-lg-4">
								<div className="contact-office-card contact-person-card">
									<span className="contact-office-label">For More Information</span>
									<h3>Mr. R. Palani Rajan — Director</h3>
									<p>
										<strong>Mobile:</strong> <a href="tel:+919382827023">93828 27023</a> / <a href="tel:+919750955833">97509 55833</a>
									</p>
								</div>
							</div>

						</div>

					</div>
				</section>




				{/* Iframe */}
				<section className="contact-iframe-section section-lgb" data-aos="fade-up" data-aos-duration="800">
					<div className="container">
						<iframe src="https://maps.google.com/maps?q=Vaishnavi%20Jeswanth%20Apartments%20Chozhambedu%20Road%20Ambattur%20Chennai%20600053&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near" title="Conveytech Group, Ambattur, Chennai" aria-label="Conveytech Group, Ambattur, Chennai"></iframe>
					</div>
				</section>
				{/* Iframe End*/}

			</div>
			{/* Contact Us Content End */}
		</>
	)
}
