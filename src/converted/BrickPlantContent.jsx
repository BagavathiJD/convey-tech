import ProductSidebar from '../components/common/ProductSidebar'
import ProductLightboxImage from '../components/ui/ProductLightboxImage'

export default function BrickPlantContent() {
	return (
		<>
			<div className="pbmit-title-bar-wrapper">
				<div className="container">
					<div className="pbmit-title-bar-content">
						<div className="pbmit-title-bar-content-inner">
							<div className="pbmit-tbar">
								<div className="pbmit-tbar-inner container">
									<h3 className="pbmit-tbar-subtitle"> Product</h3>
									<h1 className="pbmit-tbar-title">2/3/4 Bin Batching Plant for Flyask Brick Plant/AAC Brick Plant</h1>
								</div>
							</div>
							<div className="pbmit-breadcrumb">
								<div className="pbmit-breadcrumb-inner">
									<span>
										<a title="" href="#" className="home"><span>Home</span></a>
									</span>
									<span className="sep"></span>
									<span><span className="post-root post post-post current-item">2/3/4 Bin Batching Plant for Flyask Brick Plant/AAC Brick Plant</span></span>
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
										<h3 className="pbmit-title">2/3/4 Bin Batching Plant for Flyask Brick Plant/AAC Brick Plant</h3>
									</div>
									<p> This 2/3/4 Bin Batching Plant is Used for Handling Quarry Dust/Flyash/Lime Powder/Quarry Chips Etc for Flyash/Cement Brick Plant, Cement Block making plant, AAC Block Plant, Light Weight Brick Plant Etc.
    This has used from Feeding from Loader to Transfeering to Mixer Mchine (Brick Plant)</p>
	<p>The system ensures efficient material handling, controlled feeding, and a consistent supply of raw materials to the mixer machine, supporting smooth and reliable production operations.</p>
									
								</div>
								{/* <div className="pbmit-service-feature-image">
									<ProductLightboxImage src="/images/convey-tech/mini-cement-feeding-img-3.png" alt="Storage Silos" />
								</div> */}

								


								<div className="pbmit-service-feature-image product-image-pair">
									<div className="row g-4">
										<div className="col-md-6">
											<figure className="product-image-pair-item">
												<ProductLightboxImage src="/images/convey-tech/flyask-brick-plant-image-1.jpeg" alt="Pneumatic cement feeding system" />
											</figure>
										</div>
										<div className="col-md-6">
											<figure className="product-image-pair-item">
												<ProductLightboxImage src="/images/convey-tech/flyask-brick-plant-image-2.jpeg" alt="Pneumatic cement feeding equipment" />
											</figure>
										</div>
									</div>
								</div>
								<div data-aos="fade-up" data-aos-duration="800">
									<div className="pbmit-custom-heading">
										<h3 className="pbmit-title">Applications of the Batching Plant</h3>
									</div>
									<ul className="list-group">
										<li className="list-group-item">
											<span className="pbmit-icon-list-icon">
												<i className="pbmit-base-icon-checkbox"></i>
											</span>
											<span className="pbmit-icon-list-text">Fly Ash Brick Manufacturing Plants</span>
										</li>
										<li className="list-group-item">
											<span className="pbmit-icon-list-icon">
												<i className="pbmit-base-icon-checkbox"></i>
											</span>
											<span className="pbmit-icon-list-text">Cement Brick Manufacturing Plants</span>
										</li>
										<li className="list-group-item">
											<span className="pbmit-icon-list-icon">
												<i className="pbmit-base-icon-checkbox"></i>
											</span>
											<span className="pbmit-icon-list-text">Cement Block Making Plants</span>
										</li>
										<li className="list-group-item">
											<span className="pbmit-icon-list-icon">
												<i className="pbmit-base-icon-checkbox"></i>
											</span>
											<span className="pbmit-icon-list-text">AAC Block Manufacturing Plants</span>
										</li>
										<li className="list-group-item">
											<span className="pbmit-icon-list-icon">
												<i className="pbmit-base-icon-checkbox"></i>
											</span>
											<span className="pbmit-icon-list-text">Lightweight Brick Manufacturing Plants</span>
										</li>
										<li className="list-group-item">
											<span className="pbmit-icon-list-icon">
												<i className="pbmit-base-icon-checkbox"></i>
											</span>
											<span className="pbmit-icon-list-text">Other Construction Material Manufacturing Units</span>
										</li>
									</ul>

								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	)
}
