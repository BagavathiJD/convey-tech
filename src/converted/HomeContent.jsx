import { Link } from 'react-router-dom'
import { getProductPath, products } from '../data/products'

const homeServiceImages = [
	'/images/homepage-1/service/service-img-01.jpg',
	'/images/homepage-1/service/service-img-02.jpg',
	'/images/homepage-1/service/service-img-03.jpg',
	'/images/homepage-1/service/service-img-04.jpg',
	'/images/homepage-1/service/service-img-05.jpg',
	'/images/homepage-1/service/service-img-06.jpg',
]


export default function HomeContent() {
	return (
		<>

			<div className="pbmit-slider-area pbmit-slider-one">
				<div className="swiper-slider" data-autoplay="true" data-loop="true" data-dots="false" data-arrows="true" data-columns="1" data-margin="0" data-effect="fade">
					<div className="swiper-wrapper">
						{/* Slide1 */}
						<div className="swiper-slide">
							<div className="pbmit-slider-item">
								<div className="pbmit-slider-bg" style={{ backgroundImage: "url(/images/banner-slider-img/banner-image-01.png)" }}></div>
								<div className="container">
									<div className="pbmit-slider-content ct-slider-box">
										<h5 className="pbmit-slider-subtitle transform-left transform-delay-1">
											POWERING INDUSTRIAL PROGRESS
										</h5>
										<h2 className="pbmit-slider-title transform-left transform-delay-2">
											Manufacturing <br />Your Vision
										</h2>
										<div className="pbmit-slider-cta">
											<div className="pbmit-slider-desc transform-left transform-delay-3">Whether it’s small-scale custom work or large-scale<br /> production we build with purpose, power & precision.</div>
											<div className="pbmit-button">
												<div className="transform-left transform-delay-4">
													<Link to="/about" className="pbmit-btn white">
														<span className="pbmit-button-content-wrapper">
															<span className="pbmit-button-icon">
																<i className="pbmit-induyst-icon pbmit-induyst-icon-next"></i>
															</span>
															<span className="pbmit-button-text">Discover More</span>
														</span>
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* Slide2 */}
						<div className="swiper-slide">
							<div className="pbmit-slider-item">
								<div className="pbmit-slider-bg" style={{ backgroundImage: "url(/images/banner-slider-img/banner-image-02.png)" }}></div>
								<div className="container">
									<div className="pbmit-slider-content ct-slider-box">
										<h5 className="pbmit-slider-subtitle transform-left transform-delay-1">
											SYSTEMS BUILT FOR HEAVY DEMAND
										</h5>
										<h2 className="pbmit-slider-title transform-left transform-delay-2">
											Trusted across<br /> India
										</h2>
										<div className="pbmit-slider-cta">
											<div className="pbmit-slider-desc transform-left transform-delay-3">Whether it’s small-scale custom work or large-scale<br /> production we build with purpose, power & precision.</div>
											<div className="pbmit-button">
												<div className="transform-left transform-delay-4">
													<Link to="/about" className="pbmit-btn white">
														<span className="pbmit-button-content-wrapper">
															<span className="pbmit-button-icon">
																<i className="pbmit-induyst-icon pbmit-induyst-icon-next"></i>
															</span>
															<span className="pbmit-button-text">Discover More</span>
														</span>
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* Slide3 */}
						<div className="swiper-slide">
							<div className="pbmit-slider-item">
								<div className="pbmit-slider-bg" style={{ backgroundImage: "url(/images/convey-tech/banner-3.png)" }}></div>
								<div className="container">
									<div className="pbmit-slider-content ct-slider-box">
										<h5 className="pbmit-slider-subtitle transform-left transform-delay-1">
											YOUR PROJECT, OUR COMMITMENT
										</h5>
										<h2 className="pbmit-slider-title transform-left transform-delay-2">
											FROM BLUEPRINT<br /> TO REALITY
										</h2>
										<div className="pbmit-slider-cta">
											<div className="pbmit-slider-desc transform-left transform-delay-3">Whether it’s small-scale custom work or large-scale<br /> production we build with purpose, power & precision.</div>
											<div className="pbmit-button">
												<div className="transform-left transform-delay-4">
													<Link to="/about" className="pbmit-btn white">
														<span className="pbmit-button-content-wrapper">
															<span className="pbmit-button-icon">
																<i className="pbmit-induyst-icon pbmit-induyst-icon-next"></i>
															</span>
															<span className="pbmit-button-text">Discover More</span>
														</span>
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>



			{/* About Start */}
			<section className="home-about-section section-lgt fade-section">
				<div className="container-fluid">
					<div className="home-about-shell">
						<div className="row g-4 g-xl-5 align-items-stretch home-about-row">
							<div className="col-lg-5 home-about-media-col">
								<div className="home-about-media">
									<img src="/images/convey-tech/about-us-image.png" alt="Convey Tech manufacturing and material handling" />
									<div className="home-about-media-badge">
										<span className="home-about-media-badge-num">25+</span>
										<span className="home-about-media-badge-label">Years of Industrial Expertise</span>
									</div>
								</div>
							</div>
							<div className="col-lg-7 home-about-copy-col">
								<div className="home-about-copy">
									<div className="pbmit-heading-subheading">
										<h4 className="pbmit-subtitle">About Us</h4>
										<h2 className="pbmit-title">Reliable Material Handling Solutions, Built for Industry</h2>
									</div>
									<p>Convey Tech is a specialized manufacturer and turnkey solution provider for material handling and conveying systems designed for demanding industrial applications. We design, manufacture, supply, and undertake erection of customized conveying and material storage solutions with a strong focus on quality, reliability, performance, and long-term operational efficiency.</p>
									<ul className="home-about-highlights">
										<li>
											<span className="home-about-highlight-icon"><i className="pbmit-induyst-icon pbmit-induyst-icon-check"></i></span>
											<span>Material Handling Specialists</span>
										</li>
										<li>
											<span className="home-about-highlight-icon"><i className="pbmit-induyst-icon pbmit-induyst-icon-check"></i></span>
											<span>Custom Engineering</span>
										</li>
										<li>
											<span className="home-about-highlight-icon"><i className="pbmit-induyst-icon pbmit-induyst-icon-check"></i></span>
											<span>Quality Manufacturing</span>
										</li>
									</ul>
									<div className="home-about-pillars">
										<article className="home-about-pillar">
											<span className="home-about-pillar-num">01</span>
											<h3>Our Vision</h3>
											<p>To be a trusted leader in material handling and conveying solutions for modern industries.</p>
										</article>
										<article className="home-about-pillar">
											<span className="home-about-pillar-num">02</span>
											<h3>Our Mission</h3>
											<p>To design, manufacture, supply, and erect systems that deliver efficiency and long-term value.</p>
										</article>
										<article className="home-about-pillar">
											<span className="home-about-pillar-num">03</span>
											<h3>Our Values</h3>
											<p>Committed to quality products and solutions that meet industry standards and expectations.</p>
										</article>
									</div>
									<Link to="/about" className="pbmit-btn blackish home-about-cta">
										<span className="pbmit-button-content-wrapper">
											<span className="pbmit-button-icon">
												<i className="pbmit-induyst-icon pbmit-induyst-icon-next"></i>
											</span>
											<span className="pbmit-button-text">Discover More</span>
										</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* About End */}


			{/* Why Choose Start */}
			<section className="why-choose-section fade-section" data-aos="fade-up" data-aos-duration="800">
				<div className="container-fluid">
					<div className="why-choose-shell">
						<div className="row g-4 g-xl-5 align-items-center">
							<div className="col-lg-4 col-xl-3 why-choose-media-col">
								<div className="why-choose-media">
									<img src="/images/convey-tech/convey-tech-img-31.jpeg" alt="Convey Tech industrial systems" />
								</div>
							</div>
							<div className="col-lg-8 col-xl-9">
								<div className="why-choose-content">
									<div className="pbmit-heading-subheading">
										<h4 className="pbmit-subtitle">Why Choose ConveyTech</h4>
										<h2 className="pbmit-title">Engineering the Right Solution for Every Material Handling Need</h2>
									</div>
									<div className="why-choose-copy">
										<p>At Convey Tech, we combine practical engineering expertise, quality manufacturing, and turnkey project execution to deliver material handling systems that are built for demanding industrial environments.</p>
										<p>Every project has different requirements. We design conveying and storage systems according to your plant layout, material characteristics, capacity, and operational needs.</p>
									</div>
									<div className="why-choose-features">
										<article className="why-choose-feature">
											<span className="why-choose-feature-num">01</span>
											<div>
												<h3>Customized Engineering</h3>
												<p>Systems tailored to your plant layout, material type, and capacity goals.</p>
											</div>
										</article>
										<article className="why-choose-feature">
											<span className="why-choose-feature-num">02</span>
											<div>
												<h3>Quality-Focused Manufacturing</h3>
												<p>Built with durable components for reliable performance on demanding sites.</p>
											</div>
										</article>
										<article className="why-choose-feature">
											<span className="why-choose-feature-num">03</span>
											<div>
												<h3>Complete Turnkey Solutions</h3>
												<p>From design and supply to erection support for seamless project execution.</p>
											</div>
										</article>
									</div>
									<Link to="/about" className="pbmit-btn why-choose-cta">
										<span className="pbmit-button-content-wrapper">
											<span className="pbmit-button-icon">
												<i className="pbmit-induyst-icon pbmit-induyst-icon-next"></i>
											</span>
											<span className="pbmit-button-text">Discover More</span>
										</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Why Choose End */}

			{/* Service Start */}
			<section className="section-xxl fade-section">
				<div className="container">
					<div className="d-md-flex justify-content-between">
						<div className="pbmit-heading-subheading">
							<h4 className="pbmit-subtitle">Our Products</h4>
							<h2 className="pbmit-title">We create personalized <br className="d-inline" /> manufacturing plans</h2>
						</div>
						<div className="service-arrow d-inline-flex"></div>
					</div>
					<div className="swiper-slider" data-autoplay="true" data-loop="true" data-dots="false" data-arrows="true" data-arrows-class="service-arrow" data-columns="3" data-margin="30" data-effect="slide">
						<div className="swiper-wrapper">
							{products.map((product, index) => {
								const to = getProductPath(product)
								const image = product.listingImage || homeServiceImages[index % homeServiceImages.length]
								return (
									<article className="pbmit-service-style-1 swiper-slide" key={product.slug}>
										<div className="pbminfotech-post-item">
											<div className="pbmit-box-content-wrap">
												<div className="pbmit-image-wrap">
													<div className="pbmit-featured-img-wrapper">
														<div className="pbmit-featured-wrapper">
															<img src={image} className="img-fluid" alt={product.title} />
														</div>
													</div>
													<Link className="pbmit-link" to={to}></Link>
												</div>
												<div className="pbmit-service-content-wrap">
													<h3 className="pbmit-service-title">
														<Link to={to}>{product.title}</Link>
													</h3>
													<div className="pbmit-service-description">
														<p>{product.listingDesc}</p>
													</div>
													<div className="pbmit-service-btn-wrapper">
														<div className="pbmit-service-btn">
															<Link className="pbmit-button-inner" to={to}>
																<span className="pbmit-button-text">Read More</span>
																<i className="pbmit-base-icon-right-arrow"></i>
															</Link>
														</div>
													</div>
													<Link className="pbmit-link" to={to}></Link>
												</div>
											</div>
										</div>
									</article>
								)
							})}
						</div>
					</div>
					<div className="pbmit-bottom-text text-center mt-5 pt-md-2">
						<Link to="/services"><u>Explore All Products</u></Link>
					</div>
				</div>
			</section>
			{/* Service End */}



			{/* Stats Start */}
			<section className="about-metrics fade-section">
				<div className="container-fluid">
					<div className="about-metrics-bar">
						<article className="about-metrics-item">
							<strong>
								<span className="pbmit-number-rotate numinate" data-appear-animation="animateDigits" data-from="0" data-to="96" data-interval="5" data-before="" data-before-style="" data-after="" data-after-style="">96</span>%
							</strong>
							<span>Plant uptime focus</span>
						</article>
						<article className="about-metrics-item">
							<strong>
								<span className="pbmit-number-rotate numinate" data-appear-animation="animateDigits" data-from="0" data-to="20" data-interval="5" data-before="" data-before-style="" data-after="" data-after-style="">20</span>+
							</strong>
							<span>Years of experience</span>
						</article>
						<article className="about-metrics-item">
							<strong>
								<span className="pbmit-number-rotate numinate" data-appear-animation="animateDigits" data-from="0" data-to="500" data-interval="20" data-before="" data-before-style="" data-after="" data-after-style="">500</span>+
							</strong>
							<span>Systems delivered</span>
						</article>
						<article className="about-metrics-item about-metrics-item--cta">
							<p>Built for demanding industrial environments across India.</p>
							<Link to="/contact">Talk to our team →</Link>
						</article>
					</div>
				</div>
			</section>
			{/* Stats End */}



			{/* Accordion Start */}
			<section className="accordion-section-one pbmit-bg-color-light fade-section">
				<div className="container-fluid p-0">
					<div className="row g-0">
						<div className="col-md-4 first-col">
							<div className="accordion-img"></div>
						</div>
						<div className="col-md-8 second-col">
							<div className="accordion-one-right-box">
								<div className="row">
									<div className="col-md-12 col-xl-6 left-col">
										<div className="pbmit-heading-subheading">
											<h4 className="pbmit-subtitle">To know more about us</h4>
											<h2 className="pbmit-title">What would you like to know?</h2>
											<div className="pbmit-heading-desc">Didn’t find the answer you were looking for? Please ask to our customer service department.</div>
										</div>

									</div>
									<div className="col-md-12 col-xl-6">
										<div className="accordion" id="accordionExample1">
											<div className="accordion-item active" id="headingOne1">
												<h2 className="accordion-header">
													<button className="accordion-button" type="button" data-bs-toggle="collapse"
														data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
														<span className="pbmit-accordion-title">
															01. What products does ConveyTech Groups manufacture and supply?
														</span>
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
												<div id="collapseOne1" className="accordion-collapse collapse show" aria-labelledby="headingOne1"
													data-bs-parent="#accordionExample1">
													<div className="accordion-body">
														We design, manufacture and supply aggregate feeding belt conveyors, cement and fly ash storage silos, silo accessories, pneumatic cement feeding systems, ready mix concrete portable conveyors, and brick plant / mini cement plant equipment.
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h2 className="accordion-header" id="headingTwo1">
													<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
														data-bs-target="#collapseTwo1" aria-expanded="false" aria-controls="collapseTwo1">
														<span className="pbmit-accordion-title">
															02. Do you provide complete turnkey solutions?
														</span>
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
												<div id="collapseTwo1" className="accordion-collapse collapse" aria-labelledby="headingTwo1"
													data-bs-parent="#accordionExample1">
													<div className="accordion-body">
														Yes. We handle design, manufacturing, supply and erection, so your conveyor or silo system arrives installed and ready to run.
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h2 className="accordion-header" id="headingThree1">
													<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
														data-bs-target="#collapseThree1" aria-expanded="false" aria-controls="collapseThree1">
														<span className="pbmit-accordion-title">
															03. What storage silo capacities do you offer?
														</span>
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
												<div id="collapseThree1" className="accordion-collapse collapse" aria-labelledby="headingThree1"
													data-bs-parent="#accordionExample1">
													<div className="accordion-body">
														We offer cement, fly ash and limestone silos from 50 tons to 500 tons, in welded or bolted construction, to suit your plant&apos;s layout and storage needs.
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h2 className="accordion-header" id="headingFour1">
													<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
														data-bs-target="#collapseFour1" aria-expanded="false" aria-controls="collapseFour1">
														<span className="pbmit-accordion-title">
															04. What is the capacity of your pneumatic cement feeding systems?
														</span>
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
												<div id="collapseFour1" className="accordion-collapse collapse" aria-labelledby="headingFour1"
													data-bs-parent="#accordionExample1">
													<div className="accordion-body">
														Our systems feed cement and fly ash from the bunker to the silo at 500 m³/hr up to 1500 m³/hr. They include a twin lobe air blower/compressor, pneumatic or manual bag feeding machines, and a twin cement feeding system.
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h2 className="accordion-header" id="headingFive1">
													<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
														data-bs-target="#collapseFive1" aria-expanded="false" aria-controls="collapseFive1">
														<span className="pbmit-accordion-title">
															05. Which industries do your conveyors and equipment serve, and how can I request a quote?
														</span>
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
												<div id="collapseFive1" className="accordion-collapse collapse" aria-labelledby="headingFive1"
													data-bs-parent="#accordionExample1">
													<div className="accordion-body">
														We serve ready mix concrete batching plants, cement plants, and cement / fly ash block and brick making plants. To request a quote, call <a href="tel:6381108876">6381108876</a> / <a href="tel:6379801161">6379801161</a>, use the Contact page or email conveytech@yahoo.co.in with your capacity and site requirements.
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Accordion Start */}
		</>
	)
}
