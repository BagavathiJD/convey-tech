import { useState } from 'react'
import { Link } from 'react-router-dom'

const galleryVideos = [
	{ src: '/images/convey-tech/gallery-video-1.mp4', title: 'Convey Tech project video 1' },
	{ src: '/images/convey-tech/gallery-video-2.mp4', title: 'Convey Tech project video 2' },
]

const newGalleryImages = [
	{ src: '/images/convey-tech/aggregate-feeding-belt-image-1.png', alt: 'Aggregate feeding belt conveyor' },
	{ src: '/images/convey-tech/aggregate-feeding-belt-image-2.png', alt: 'Aggregate conveyor system' },
	{ src: '/images/convey-tech/aggregate-feeding-belt-image-3.png', alt: 'Aggregate feeding conveyor equipment' },
	// { src: '/images/convey-tech/storage-silos-image-1.jpeg', alt: 'Industrial storage silo' },
	{ src: '/images/convey-tech/storage-silos-image-2.jpeg', alt: 'Cement storage silo equipment' },
	{ src: '/images/convey-tech/storage-silos-image-3.jpeg', alt: 'Storage silo installation' },
]

export default function PortfolioContent() { const [activeTab, setActiveTab] = useState('images') 
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
    {/* Title Bar End*/} {/* Page Content */}
    <div className="page-content">

        {/* Portfolio Sortable Col 3 Start */}
        <section className="section-lg pbmit-element-portfolio-style-1 convey-tech-gallery">
            <div className="container">
                <div className="convey-tech-gallery-tabs" role="tablist" aria-label="Gallery media">
                    <button type="button" id="gallery-images-tab" role="tab" aria-selected={activeTab==='images' } aria-controls="gallery-images-panel" className={activeTab==='images' ? 'is-active' : ''} onClick={()=> setActiveTab('images')} > Images
                    </button>
                    <button type="button" id="gallery-videos-tab" role="tab" aria-selected={activeTab==='videos' } aria-controls="gallery-videos-panel" className={activeTab==='videos' ? 'is-active' : ''} onClick={()=> setActiveTab('videos')} > Videos
                    </button>
                </div>
                {/*
                <div className="pbmit-sortable-list">
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
                <div hidden={activeTab !=='images' } className="row g-0 pbmit-element-posts-wrapper convey-tech-gallery-masonry" id="gallery-images-panel" role="tabpanel" aria-labelledby="gallery-images-tab">
                    <article className="pbmit-portfolio-style-1 col-md-6 col-lg-4 factory">
                        <div className="pbminfotech-post-content">
                            <div className="pbminfotech-post-warpper">
                                <div className="pbmit-featured-img-wrapper">
                                    <div className="pbmit-featured-wrapper">
                                        <img src="/images/convey-tech/cement-feeding-imge-01.jpeg" className="img-fluid" alt="" />
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
                                        <img src="/images/convey-tech/aggrigate-feeding-belt-image.png" className="img-fluid" alt="Aggregate feeding belt conveyor" />
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
                                        <img src="/images/convey-tech/cement-feeding-imge-02.jpeg" className="img-fluid" alt="" />
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
                                        <img src="/images/convey-tech/mini-cement-feeding-img-3.png" className="img-fluid" alt="" />
                                    </div>
                                </div>
                                <Link className="pbmit-link" to="/portfolio"></Link>
                            </div>

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
                            {/*
                            <div className="pbminfotech-box-content">
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
                            {/*
                            <div className="pbminfotech-box-content">
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
                                        <img src="/images/convey-tech/cement-feeding-imge-03.jpeg" className="img-fluid" alt="" />
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
                            {/*
                            <div className="pbminfotech-box-content">
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
                                        <img src="/images/convey-tech/mini-cement-feeding-img-1.png" className="img-fluid" alt="" />
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
                                        <img src="/images/convey-tech/convey-tech-img-33.jpeg" className="img-fluid" alt="" />
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
                                        <img src="/images/convey-tech/convey-tech-img-3.jpeg" className="img-fluid" alt="" />
                                    </div>
                                </div>
                                <Link className="pbmit-link" to="/portfolio"></Link>
                            </div>
                            {/*
                            <div className="pbminfotech-box-content">
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

                    {newGalleryImages.map((image) => (
                    <article className="pbmit-portfolio-style-1 col-md-6 col-lg-4 factory" key={image.src}>
                        <div className="pbminfotech-post-content">
                            <div className="pbminfotech-post-warpper">
                                <div className="pbmit-featured-img-wrapper">
                                    <div className="pbmit-featured-wrapper">
                                        <img src={image.src} className="img-fluid" alt={image.alt} />
                                    </div>
                                </div>
                                <Link className="pbmit-link" to="/portfolio" aria-label={image.alt}></Link>
                            </div>
                        </div>
                    </article>
                    ))}

                </div>
                <div hidden={activeTab !=='videos' } className="row g-4 convey-tech-gallery-videos" id="gallery-videos-panel" role="tabpanel" aria-labelledby="gallery-videos-tab">
                    {activeTab === 'videos' && galleryVideos.map((video) => (
                    <div className="col-md-6" key={video.src}>
                        <video controls preload="metadata" playsInline aria-label={video.title}>
                            <source src={video.src} type="video/mp4" /> Your browser does not support the video element.
                        </video>
                    </div>
                    ))}
                </div>
            </div>
        </section>
        {/* Portfolio Sortable Col 3 End */}

    </div>
    {/* Page Content End */}
    </> ) }