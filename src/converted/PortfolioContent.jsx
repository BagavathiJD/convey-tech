import { Link } from 'react-router-dom'

export default function PortfolioContent() {
  return (
    <>
      {/* Title Bar */}
      <div className="pbmit-title-bar-wrapper">
        <div className="container">
          <div className="pbmit-title-bar-content">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container">
      								<h1 className="pbmit-tbar-title"> Gallery</h1>
                </div>
              </div>
              <div className="pbmit-breadcrumb">
                <div className="pbmit-breadcrumb-inner">
                  <span>
      									<a title="" href="#" className="home"><span>Home</span></a>
                  </span>
                  <span className="sep"></span>
      								<span><span className="post-root post post-post current-item"> Gallery</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      		{/* Title Bar End*/}

              {/* Page Content */}
      <div className="page-content">
                  
                  {/* Portfolio Sortable Col 3 Start */}
        <section className="section-lg pbmit-element-portfolio-style-1 convey-tech-gallery">
          <div className="container">
      					{/* <div className="pbmit-sortable-list">
      						<ul className="pbmit-sortable-list-ul">
      						   <li><a href="#" className="pbmit-sortable-link pbmit-selected" data-sortby="*">All</a></li>
      						   <li><a href="#" className="pbmit-sortable-link" data-sortby="chemical">Chemical</a></li>
      						   <li><a href="#" className="pbmit-sortable-link" data-sortby="construction">Construction</a></li>
      						   <li><a href="#" className="pbmit-sortable-link" data-sortby="engineering">Engineering</a></li>
      						   <li><a href="#" className="pbmit-sortable-link" data-sortby="factory">Factory</a></li>
      						   <li><a href="#" className="pbmit-sortable-link" data-sortby="industrial">Industrial</a></li>
      						   <li><a href="#" className="pbmit-sortable-link" data-sortby="manufacture">Manufacture</a></li>
      						</ul>
      					</div> */}
      					<div className="row g-0 pbmit-element-posts-wrapper convey-tech-gallery-masonry">
      						<article className="pbmit-portfolio-style-1 col-md-6 col-lg-4 industrial">
      							<div className="pbminfotech-post-content">
      								<div className="pbminfotech-post-warpper">
      									<div className="pbmit-featured-img-wrapper">
      										<div className="pbmit-featured-wrapper">
      											<img src="/images/convey-tech/convey-tech-img-1.jpeg" className="img-fluid" alt="" />
      										</div>
      									</div>
      									<Link className="pbmit-link" to="/portfolio"></Link>
      								</div>
      								{/*<div className="pbminfotech-box-content">
      									<div className="pbminfotech-titlebox">
      										<div className="pbmit-port-cat">
      											<Link to="/portfolio" rel="tag">Industrial</Link>
      										</div>
      										<h3 className="pbmit-portfolio-title">
      											<Link to="/portfolio">Automated Industry</Link>
      										</h3>
      									</div>
      								</div>*/}
      							</div>
      						</article>
      						<article className="pbmit-portfolio-style-1 col-md-6 col-lg-4 chemical">
      							<div className="pbminfotech-post-content">
      								<div className="pbminfotech-post-warpper">
      									<div className="pbmit-featured-img-wrapper">
      										<div className="pbmit-featured-wrapper">
      											<img src="/images/convey-tech/convey-tech-img-2.jpeg" className="img-fluid" alt="" />
      										</div>
      									</div>
      									<Link className="pbmit-link" to="/portfolio"></Link>
      								</div>
      								{/*<div className="pbminfotech-box-content">
      									<div className="pbminfotech-titlebox">
      										<div className="pbmit-port-cat">
      											<Link to="/portfolio" rel="tag">Chemical</Link>
      										</div>
      										<h3 className="pbmit-portfolio-title">
      											<Link to="/portfolio">Oil & Gas Industry</Link>
      										</h3>
      									</div>
      								</div>*/}
      							</div>
      						</article>
      						<article className="pbmit-portfolio-style-1 col-md-6 col-lg-4 factory">
      							<div className="pbminfotech-post-content">
      								<div className="pbminfotech-post-warpper">
      									<div className="pbmit-featured-img-wrapper">
      										<div className="pbmit-featured-wrapper">
      											<img src="/images/convey-tech/convey-tech-img-3.jpeg" className="img-fluid" alt="" />
      										</div>
      									</div>
      									<Link className="pbmit-link" to="/portfolio"></Link>
      								</div>
      								{/*<div className="pbminfotech-box-content">
      									<div className="pbminfotech-titlebox">
      										<div className="pbmit-port-cat">
      											<Link to="/portfolio" rel="tag">Factory</Link>
      										</div>
      										<h3 className="pbmit-portfolio-title">
      											<Link to="/portfolio">Industry Innovation</Link>
      										</h3>
      									</div>
      								</div>*/}
      							</div>
      						</article>

      						<article className="pbmit-portfolio-style-1 col-md-6 col-lg-4 engineering">
      							<div className="pbminfotech-post-content">
      								<div className="pbminfotech-post-warpper">
      									<div className="pbmit-featured-img-wrapper">
      										<div className="pbmit-featured-wrapper">
      											<img src="/images/convey-tech/convey-tech-img-5.jpeg" className="img-fluid" alt="" />
      										</div>
      									</div>
      									<Link className="pbmit-link" to="/portfolio"></Link>
      								</div>
      								{/*<div className="pbminfotech-box-content">
      									<div className="pbminfotech-titlebox">
      										<div className="pbmit-port-cat">
      											<Link to="/portfolio" rel="tag">Engineering</Link>
      										</div>
      										<h3 className="pbmit-portfolio-title">
      											<Link to="/portfolio">Construction Planning</Link>
      										</h3>
      									</div>
      								</div>*/}
      							</div>
      						</article>
      						<article className="pbmit-portfolio-style-1 col-md-6 col-lg-4 factory">
      							<div className="pbminfotech-post-content">
      								<div className="pbminfotech-post-warpper">
      									<div className="pbmit-featured-img-wrapper">
      										<div className="pbmit-featured-wrapper">
      											<img src="/images/convey-tech/convey-tech-img-6.jpeg" className="img-fluid" alt="" />
      										</div>
      									</div>
      									<Link className="pbmit-link" to="/portfolio"></Link>
      								</div>
      								
      							</div>
      						</article>
                  
                  <article className="pbmit-portfolio-style-1 col-md-6 col-lg-4 factory">
      							<div className="pbminfotech-post-content">
      								<div className="pbminfotech-post-warpper">
      									<div className="pbmit-featured-img-wrapper">
      										<div className="pbmit-featured-wrapper">
      											<img src="/images/convey-tech/convey-tech-img-9.jpeg" className="img-fluid" alt="" />
      										</div>
      									</div>
      									<Link className="pbmit-link" to="/portfolio"></Link>
      								</div>
      								
      							</div>
      						</article>
                  <article className="pbmit-portfolio-style-1 col-md-6 col-lg-4 factory">
      							<div className="pbminfotech-post-content">
      								<div className="pbminfotech-post-warpper">
      									<div className="pbmit-featured-img-wrapper">
      										<div className="pbmit-featured-wrapper">
      											<img src="/images/convey-tech/convey-tech-img-10.jpeg" className="img-fluid" alt="" />
      										</div>
      									</div>
      									<Link className="pbmit-link" to="/portfolio"></Link>
      								</div>
      								
      							</div>
      						</article>
                  <article className="pbmit-portfolio-style-1 col-md-6 col-lg-4 factory">
      							<div className="pbminfotech-post-content">
      								<div className="pbminfotech-post-warpper">
      									<div className="pbmit-featured-img-wrapper">
      										<div className="pbmit-featured-wrapper">
      											<img src="/images/convey-tech/convey-tech-img-11.jpeg" className="img-fluid" alt="" />
      										</div>
      									</div>
      									<Link className="pbmit-link" to="/portfolio"></Link>
      								</div>
      								
      							</div>
      						</article>
                  <article className="pbmit-portfolio-style-1 col-md-6 col-lg-4 factory">
      							<div className="pbminfotech-post-content">
      								<div className="pbminfotech-post-warpper">
      									<div className="pbmit-featured-img-wrapper">
      										<div className="pbmit-featured-wrapper">
      											<img src="/images/convey-tech/convey-tech-img-12.jpeg" className="img-fluid" alt="" />
      										</div>
      									</div>
      									<Link className="pbmit-link" to="/portfolio"></Link>
      								</div>
      								
      							</div>
      						</article>
                  <article className="pbmit-portfolio-style-1 col-md-6 col-lg-4 factory">
      							<div className="pbminfotech-post-content">
      								<div className="pbminfotech-post-warpper">
      									<div className="pbmit-featured-img-wrapper">
      										<div className="pbmit-featured-wrapper">
      											<img src="/images/convey-tech/convey-tech-img-13.jpeg" className="img-fluid" alt="" />
      										</div>
      									</div>
      									<Link className="pbmit-link" to="/portfolio"></Link>
      								</div>
      								
      							</div>
      						</article>
                  <article className="pbmit-portfolio-style-1 col-md-6 col-lg-4 factory">
      							<div className="pbminfotech-post-content">
      								<div className="pbminfotech-post-warpper">
      									<div className="pbmit-featured-img-wrapper">
      										<div className="pbmit-featured-wrapper">
      											<img src="/images/convey-tech/convey-tech-img-14.jpeg" className="img-fluid" alt="" />
      										</div>
      									</div>
      									<Link className="pbmit-link" to="/portfolio"></Link>
      								</div>
      								
      							</div>
      						</article>
                  <article className="pbmit-portfolio-style-1 col-md-6 col-lg-4 factory">
      							<div className="pbminfotech-post-content">
      								<div className="pbminfotech-post-warpper">
      									<div className="pbmit-featured-img-wrapper">
      										<div className="pbmit-featured-wrapper">
      											<img src="/images/convey-tech/convey-tech-img-15.jpeg" className="img-fluid" alt="" />
      										</div>
      									</div>
      									<Link className="pbmit-link" to="/portfolio"></Link>
      								</div>
      								
      							</div>
      						</article>
                  <article className="pbmit-portfolio-style-1 col-md-6 col-lg-4 factory">
      							<div className="pbminfotech-post-content">
      								<div className="pbminfotech-post-warpper">
      									<div className="pbmit-featured-img-wrapper">
      										<div className="pbmit-featured-wrapper">
      											<img src="/images/convey-tech/convey-tech-img-16.jpeg" className="img-fluid" alt="" />
      										</div>
      									</div>
      									<Link className="pbmit-link" to="/portfolio"></Link>
      								</div>
      								
      							</div>
      						</article>
                  <article className="pbmit-portfolio-style-1 col-md-6 col-lg-4 factory">
      							<div className="pbminfotech-post-content">
      								<div className="pbminfotech-post-warpper">
      									<div className="pbmit-featured-img-wrapper">
      										<div className="pbmit-featured-wrapper">
      											<img src="/images/convey-tech/convey-tech-img-17.jpeg" className="img-fluid" alt="" />
      										</div>
      									</div>
      									<Link className="pbmit-link" to="/portfolio"></Link>
      								</div>
      								
      							</div>
      						</article>
                  <article className="pbmit-portfolio-style-1 col-md-6 col-lg-4 factory">
      							<div className="pbminfotech-post-content">
      								<div className="pbminfotech-post-warpper">
      									<div className="pbmit-featured-img-wrapper">
      										<div className="pbmit-featured-wrapper">
      											<img src="/images/convey-tech/convey-tech-img-18.jpeg" className="img-fluid" alt="" />
      										</div>
      									</div>
      									<Link className="pbmit-link" to="/portfolio"></Link>
      								</div>
      								
      							</div>
      						</article>
                  <article className="pbmit-portfolio-style-1 col-md-6 col-lg-4 factory">
      							<div className="pbminfotech-post-content">
      								<div className="pbminfotech-post-warpper">
      									<div className="pbmit-featured-img-wrapper">
      										<div className="pbmit-featured-wrapper">
      											<img src="/images/convey-tech/convey-tech-img-19.jpeg" className="img-fluid" alt="" />
      										</div>
      									</div>
      									<Link className="pbmit-link" to="/portfolio"></Link>
      								</div>
      								
      							</div>
      						</article>
                  <article className="pbmit-portfolio-style-1 col-md-6 col-lg-4 factory">
      							<div className="pbminfotech-post-content">
      								<div className="pbminfotech-post-warpper">
      									<div className="pbmit-featured-img-wrapper">
      										<div className="pbmit-featured-wrapper">
      											<img src="/images/convey-tech/convey-tech-img-20.jpeg" className="img-fluid" alt="" />
      										</div>
      									</div>
      									<Link className="pbmit-link" to="/portfolio"></Link>
      								</div>
      								
      							</div>
      						</article>
                  <article className="pbmit-portfolio-style-1 col-md-6 col-lg-4 factory">
      							<div className="pbminfotech-post-content">
      								<div className="pbminfotech-post-warpper">
      									<div className="pbmit-featured-img-wrapper">
      										<div className="pbmit-featured-wrapper">
      											<img src="/images/convey-tech/convey-tech-img-21.jpeg" className="img-fluid" alt="" />
      										</div>
      									</div>
      									<Link className="pbmit-link" to="/portfolio"></Link>
      								</div>
      								
      							</div>
      						</article>
                  <article className="pbmit-portfolio-style-1 col-md-6 col-lg-4 factory">
      							<div className="pbminfotech-post-content">
      								<div className="pbminfotech-post-warpper">
      									<div className="pbmit-featured-img-wrapper">
      										<div className="pbmit-featured-wrapper">
      											<img src="/images/convey-tech/convey-tech-img-22.jpeg" className="img-fluid" alt="" />
      										</div>
      									</div>
      									<Link className="pbmit-link" to="/portfolio"></Link>
      								</div>
      								
      							</div>
      						</article>
							<article className="pbmit-portfolio-style-1 col-md-6 col-lg-4 factory">
      							<div className="pbminfotech-post-content">
      								<div className="pbminfotech-post-warpper">
      									<div className="pbmit-featured-img-wrapper">
      										<div className="pbmit-featured-wrapper">
      											<img src="/images/convey-tech/convey-tech-img-23.jpeg" className="img-fluid" alt="" />
      										</div>
      									</div>
      									<Link className="pbmit-link" to="/portfolio"></Link>
      								</div>
      								
      							</div>
      						</article>
							<article className="pbmit-portfolio-style-1 col-md-6 col-lg-4 factory">
      							<div className="pbminfotech-post-content">
      								<div className="pbminfotech-post-warpper">
      									<div className="pbmit-featured-img-wrapper">
      										<div className="pbmit-featured-wrapper">
      											<img src="/images/convey-tech/convey-tech-img-24.jpeg" className="img-fluid" alt="" />
      										</div>
      									</div>
      									<Link className="pbmit-link" to="/portfolio"></Link>
      								</div>
      								
      							</div>
      						</article>
							<article className="pbmit-portfolio-style-1 col-md-6 col-lg-4 factory">
      							<div className="pbminfotech-post-content">
      								<div className="pbminfotech-post-warpper">
      									<div className="pbmit-featured-img-wrapper">
      										<div className="pbmit-featured-wrapper">
      											<img src="/images/convey-tech/convey-tech-img-25.jpeg" className="img-fluid" alt="" />
      										</div>
      									</div>
      									<Link className="pbmit-link" to="/portfolio"></Link>
      								</div>
      								
      							</div>
      						</article>
							<article className="pbmit-portfolio-style-1 col-md-6 col-lg-4 factory">
      							<div className="pbminfotech-post-content">
      								<div className="pbminfotech-post-warpper">
      									<div className="pbmit-featured-img-wrapper">
      										<div className="pbmit-featured-wrapper">
      											<img src="/images/convey-tech/convey-tech-img-26.jpeg" className="img-fluid" alt="" />
      										</div>
      									</div>
      									<Link className="pbmit-link" to="/portfolio"></Link>
      								</div>
      								
      							</div>
      						</article>
							<article className="pbmit-portfolio-style-1 col-md-6 col-lg-4 factory">
      							<div className="pbminfotech-post-content">
      								<div className="pbminfotech-post-warpper">
      									<div className="pbmit-featured-img-wrapper">
      										<div className="pbmit-featured-wrapper">
      											<img src="/images/convey-tech/convey-tech-img-27.jpeg" className="img-fluid" alt="" />
      										</div>
      									</div>
      									<Link className="pbmit-link" to="/portfolio"></Link>
      								</div>
      								
      							</div>
      						</article>
							<article className="pbmit-portfolio-style-1 col-md-6 col-lg-4 factory">
      							<div className="pbminfotech-post-content">
      								<div className="pbminfotech-post-warpper">
      									<div className="pbmit-featured-img-wrapper">
      										<div className="pbmit-featured-wrapper">
      											<img src="/images/convey-tech/convey-tech-img-28.jpeg" className="img-fluid" alt="" />
      										</div>
      									</div>
      									<Link className="pbmit-link" to="/portfolio"></Link>
      								</div>
      								
      							</div>
      						</article>
							<article className="pbmit-portfolio-style-1 col-md-6 col-lg-4 factory">
      							<div className="pbminfotech-post-content">
      								<div className="pbminfotech-post-warpper">
      									<div className="pbmit-featured-img-wrapper">
      										<div className="pbmit-featured-wrapper">
      											<img src="/images/convey-tech/convey-tech-img-29.jpeg" className="img-fluid" alt="" />
      										</div>
      									</div>
      									<Link className="pbmit-link" to="/portfolio"></Link>
      								</div>
      								
      							</div>
      						</article>
							<article className="pbmit-portfolio-style-1 col-md-6 col-lg-4 factory">
      							<div className="pbminfotech-post-content">
      								<div className="pbminfotech-post-warpper">
      									<div className="pbmit-featured-img-wrapper">
      										<div className="pbmit-featured-wrapper">
      											<img src="/images/convey-tech/convey-tech-img-30.jpeg" className="img-fluid" alt="" />
      										</div>
      									</div>
      									<Link className="pbmit-link" to="/portfolio"></Link>
      								</div>
      								
      							</div>
      						</article>
							<article className="pbmit-portfolio-style-1 col-md-6 col-lg-4 factory">
      							<div className="pbminfotech-post-content">
      								<div className="pbminfotech-post-warpper">
      									<div className="pbmit-featured-img-wrapper">
      										<div className="pbmit-featured-wrapper">
      											<img src="/images/convey-tech/convey-tech-img-31.jpeg" className="img-fluid" alt="" />
      										</div>
      									</div>
      									<Link className="pbmit-link" to="/portfolio"></Link>
      								</div>
      								
      							</div>
      						</article>
							<article className="pbmit-portfolio-style-1 col-md-6 col-lg-4 factory">
                  <div className="pbminfotech-post-content">
                    <div className="pbminfotech-post-warpper">
                      <div className="pbmit-featured-img-wrapper">
                        <div className="pbmit-featured-wrapper">
      											<img src="/images/convey-tech/convey-tech-img-32.jpeg" className="img-fluid" alt="" />
                        </div>
                      </div>
      									<Link className="pbmit-link" to="/portfolio"></Link>
      								</div>
      								
      							</div>
      						</article>

							<article className="pbmit-portfolio-style-1 col-md-6 col-lg-4 factory">
      							<div className="pbminfotech-post-content">
      								<div className="pbminfotech-post-warpper">
      									<div className="pbmit-featured-img-wrapper">
      										<div className="pbmit-featured-wrapper">
      											<img src="/images/convey-tech/convey-tech-img-33.jpeg" className="img-fluid" alt="" />
                    </div>
      									</div>
      									<Link className="pbmit-link" to="/portfolio"></Link>
      								</div>
      								
                  </div>
                </article>
							
							
            </div>
          </div>
        </section>
                  {/* Portfolio Sortable Col 3 End */}
      
      </div>
              {/* Page Content End */}
    </>
  )
}
