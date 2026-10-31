import ProductSidebar from '../components/common/ProductSidebar'
import ProductLightboxImage from '../components/ui/ProductLightboxImage'

export default function SpecialProductsContent() {
  return (
    <>
      		<div className="pbmit-title-bar-wrapper">
      			<div className="container">
      				<div className="pbmit-title-bar-content">
      					<div className="pbmit-title-bar-content-inner">
      						<div className="pbmit-tbar">
      							<div className="pbmit-tbar-inner container">
      								<h3 className="pbmit-tbar-subtitle"> Product</h3>
      								<h1 className="pbmit-tbar-title"> Cement & Fly Ash Silo Automation for Brick Plants</h1>
      							</div>
      						</div>
      						<div className="pbmit-breadcrumb">
      							<div className="pbmit-breadcrumb-inner">
      								<span>
      									<a title="" href="#" className="home"><span>Home</span></a>
      								</span>
      								<span className="sep"></span>
      								<span><span className="post-root post post-post current-item"> Cement & Fly Ash Silo Automation for Brick Plants</span></span>
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
      									<h3 className="pbmit-title">Cement & Fly Ash Silo Automation for Brick Plants</h3>
      								</div>
      								<p>

In fly ash brick plants and cement block manufacturing plants, cement and fly ash are stored in dedicated silos to ensure efficient material handling and continuous production. These materials are transferred from the silos to the weighing hopper through screw conveyors, where the required quantity of each material is accurately weighed according to the production mix.</p>
      								<p>Our cement and fly ash silo automation solutions are designed to streamline the entire material handling process, from storage and weighing to mixing and feeding, ensuring reliable and consistent performance for brick manufacturing plants.</p>
									
      							</div>
      							{/* <div className="pbmit-service-feature-image">
      								<ProductLightboxImage src="/images/special-product-image.png" alt="Mobile Portable Belt Conveyor" />
      							</div>*/}


								
								<div className="pbmit-service-feature-image product-image-pair">
																	<div className="row g-4">
																		<div className="col-md-6">
																			<figure className="product-image-pair-item">
																				<ProductLightboxImage src="/images/convey-tech/cement-fly-ash-silo-image-1.jpeg" alt="Pneumatic cement feeding system" />
																			</figure>
																		</div>
																		<div className="col-md-6">
																			<figure className="product-image-pair-item">
																				<ProductLightboxImage src="/images/convey-tech/cement-fly-ash-silo-image-2.jpeg" alt="Pneumatic cement feeding equipment" />
																			</figure>
																		</div>
																	</div>
																</div>
      						
      							<div data-aos="fade-up" data-aos-duration="800">
      								<div className="pbmit-custom-heading">
      									<h3 className="pbmit-title">What Our Automation System Includes</h3>
      								</div>
      								<ul className="list-group">
      									<li className="list-group-item">
      										<span className="pbmit-icon-list-icon">
      											<i className="pbmit-base-icon-checkbox"></i>
      										</span>
      										<span className="pbmit-icon-list-text">Cement & Fly Ash Storage Silos: Designed for safe and efficient bulk material storage.</span>
      									</li>
      									<li className="list-group-item">
      										<span className="pbmit-icon-list-icon">
      											<i className="pbmit-base-icon-checkbox"></i>
      										</span>
      										<span className="pbmit-icon-list-text">Screw Conveyor Systems: Transfer cement and fly ash from the silos to the weighing hopper.</span>
      									</li>
      									<li className="list-group-item">
      										<span className="pbmit-icon-list-icon">
      											<i className="pbmit-base-icon-checkbox"></i>
      										</span>
      										<span className="pbmit-icon-list-text">Weighing Hopper: Measures the required quantity of each material for accurate batching.</span>
      									</li>
      									<li className="list-group-item">
      										<span className="pbmit-icon-list-icon">
      											<i className="pbmit-base-icon-checkbox"></i>
      										</span>
      										<span className="pbmit-icon-list-text">Automated Control System: Coordinates material feeding, weighing, and discharge operations.</span>
      									
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
