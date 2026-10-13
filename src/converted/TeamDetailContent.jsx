import { Link } from 'react-router-dom'
import ContactForm from '../components/sections/ContactForm'

export default function TeamDetailContent() {
  return (
    <>
      {/* Title Bar */}
      		<div className="pbmit-title-bar-wrapper">
      			<div className="container">
      				<div className="pbmit-title-bar-content">
      					<div className="pbmit-title-bar-content-inner">
      						<div className="pbmit-tbar">
      							<div className="pbmit-tbar-inner container">
      								<h3 className="pbmit-tbar-subtitle"> Team Member</h3>
      								<h1 className="pbmit-tbar-title"> Monika Larson</h1>
      							</div>
      						</div>
      						<div className="pbmit-breadcrumb">
      							<div className="pbmit-breadcrumb-inner">
      								<span>
      									<a title="" href="#" className="home"><span>Induyst</span></a>
      								</span>
      								<span className="sep"></span>
      								<span>
      									<a title="" href="#"><span>Team Members</span></a>
      								</span>
      								<span className="sep"></span>
      								<span>
      									<a title="" href="#"><span>Manager</span></a>
      								</span>
      								<span className="sep"></span>
      								<span><span className="post-root post post-post current-item"> Monika Larson</span></span>
      							</div>
      						</div>
      					</div>
      				</div> 
      			</div> 
      		</div>
      		{/* Title Bar End*/}
      
      		{/* Page Content */}
      		<div className="page-content">
      
      			{/* Team Single Detail */}
      			<section className="pbmit-team-single site-content">
      				<div className="container">
      					<div className="pbmit-team-single">
      						<div className="pbmit-team-single-inner pbmit-sticky-section">
      							<div className="pbmit-team-single-info">
      								<div className="row">
      									<div className="col-md-12 col-xl-5 pbmit-sticky-sidebar">
      										<div className="theiaStickySidebar pbmit-team-left-wrapper">
      											<div className="pbmit-team-left-inner">
      												<div className="pbmit-featured-wrapper-inner">
      													<div className="pbmit-featured-img-wrapper">
      														<img src="/images/team/team-single-01.jpg" className="img-fluid" alt="" />
      													</div>
      												</div>
      											</div>
      										</div>
      									</div>
      									<div className="col-md-12 col-xl-7 pbmit-team-detail-content">
      										<div className="pbmit-team-detail">
      											<div className="pbmit-team-detail-inner">
      												<div className="pbmit-team-summary">
      													<h4 className="pbmit-team-designation">Industrial Engineer</h4>
      													<h2 className="pbmit-team-title">Monika Larson</h2>
      												</div>
      												<div className="pbmit-short-description">
      													An industry team member is a person who works with a group of others to achieve company's goals. Team members have clearly defined roles and responsibilities.									
      												</div>
      												<ul className="pbmit-single-team-info">
      													<li>
      														<span>Email Address :</span> <a href="https://induyst-demo.pbminfotech.com/cdn-cgi/l/email-protection#8cede8e1e5e2cce9f4ede1fce0e9a2efe3e1">info@example.com </a>
      													</li>
      													<li>
      														<span>Phone Number :</span> + (123) 1812-5627-8977
      													</li>
      													<li>
      														<span>Experience</span> 05 Years in Maintenance Work
      													</li>
      													<li>
      														<span>Department :</span> Lead Industrial Manager
      													</li>
      												</ul>
      												<div className="pbmit-team-box-links">
      													<ul className="pbmit-social-links pbmit-team-social-links">
      														<li className="pbmit-social-li pbmit-social-facebook">
      															<a href="#" title="Facebook" target="_blank">
      																<span><i className="pbmit-base-icon-facebook-f"></i></span>
      															</a>
      														</li>
      														<li className="pbmit-social-li pbmit-social-twitter">
      															<a href="#" title="Twitter" target="_blank">
      																<span><i className="pbmit-base-icon-twitter-2"></i></span>
      															</a>
      														</li>
      														<li className="pbmit-social-li pbmit-social-youtube">
      															<a href="#" title="Youtube" target="_blank">
      																<span><i className="pbmit-base-icon-youtube-play"></i></span>
      															</a>
      														</li>
      														<li className="pbmit-social-li pbmit-social-instagram">
      															<a href="#" title="Instagram" target="_blank">
      																<span><i className="pbmit-base-icon-instagram"></i></span>
      															</a>
      														</li>
      													</ul>
      												</div>
      											</div>
      										</div>
      										<div className="pbmit-entry-content">
      											<div data-aos="fade-up" data-aos-duration="800">
      												<div className="pbmit-custom-heading">
      													<h3 className="pbmit-title">Personal info & Career Guidelines</h3>
      												</div>
      												<p>There are many variations of professional career path, but not all maintain the clarity and relevance. It’s essential to avoid generic, outdated information that may mislead or appear unprofessional. Always ensure of your personal profile and career narrative reflect your true expertise and goals—clearly and confidently.</p>
      												<div className="ihbox-style-2-area">
      													<div className="row pbminfotech-gap-35px">
      														<article className="pbmit-miconheading-style-2 col-md-6">
      															<div className="pbmit-ihbox-style-2">
      																<div className="pbmit-ihbox-box">
      																	<div className="pbmit-ihbox-icon">
      																		<div className="pbmit-ihbox-icon-wrapper pbmit-ihbox-icon-type-text">1<span>st</span></div>
      																	</div>
      																	<div className="pbmit-ihbox-contents">
      																		<h2 className="pbmit-element-title">
      																			Safety Compliance Certification
      																		</h2>
      																	</div>
      																</div>
      															</div>
      														</article>
      														<article className="pbmit-miconheading-style-2 col-md-6">
      															<div className="pbmit-ihbox-style-2">
      																<div className="pbmit-ihbox-box">
      																	<div className="pbmit-ihbox-icon">
      																		<div className="pbmit-ihbox-icon-wrapper pbmit-ihbox-icon-type-text">2<span>nd</span></div>
      																	</div>
      																	<div className="pbmit-ihbox-contents">
      																		<h2 className="pbmit-element-title">
      																			Technical Training Programs
      																		</h2>
      																	</div>
      																</div>
      															</div>
      														</article>
      													</div>
      												</div>
      												<ul className="list-group">
      													<li className="list-group-item">
      														<span className="pbmit-icon-list-icon">
      															<i className="pbmit-base-icon-checkbox"></i>						
      														</span>
      														<span className="pbmit-icon-list-text">Coating line a combined continuous galvanizing and color coating.</span>
      													</li>
      													<li className="list-group-item">
      														<span className="pbmit-icon-list-icon">
      															<i className="pbmit-base-icon-checkbox"></i>					
      														</span>
      														<span className="pbmit-icon-list-text">Industrial robots can perform a wide variety of tasks with precision.</span>
      													</li>
      													<li className="list-group-item">
      														<span className="pbmit-icon-list-icon">
      															<i className="pbmit-base-icon-checkbox"></i>						
      														</span>
      														<span className="pbmit-icon-list-text">That refers to a product or a set of related products that serve.</span>
      													</li>
      													<li className="list-group-item">
      														<span className="pbmit-icon-list-icon">
      															<i className="pbmit-base-icon-checkbox"></i>						
      														</span>
      														<span className="pbmit-icon-list-text">A process line is an installation used for surface and thermal.</span>
      													</li>
      												</ul>
      											</div>
      											<div data-aos="fade-up" data-aos-duration="800">
      												<div className="pbmit-custom-heading">
      													<h3 className="pbmit-title">Professional Skills</h3>
      												</div>
      												<p>The secondary industry can be divided into heavy & light-scale sectors. Large-scale industries typically require significant capital investment in plant, machinery and serve broad, diverse markets—including other manufacturing sectors.</p>
      												<div className="progressbar-area">
      													<div className="progressbar">
      														<span className="progress-label">Customer Satisfaction</span>
      														<div className="progress progress-lg progress-percent-bg">
      															<div className="progress-bar aos-init" data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}></div>
      															<span className="progress-percent">80%</span>
      														</div>
      													</div>
      													<div className="progressbar">
      														<span className="progress-label">Commitment to Goals</span>
      														<div className="progress progress-lg progress-percent-bg">
      															<div className="progress-bar aos-init" data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" role="progressbar" aria-valuenow="93" aria-valuemin="0" aria-valuemax="100" style={{width: "93%"}}></div>
      															<span className="progress-percent">93%</span>
      														</div>
      													</div>
      													<div className="progressbar">
      														<span className="progress-label">Learning  Mentality</span>
      														<div className="progress progress-lg progress-percent-bg">
      															<div className="progress-bar aos-init" data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100" style={{width: "68%"}}></div>
      															<span className="progress-percent">68%</span>
      														</div>
      													</div>
      												</div>
      											</div>
      										</div>
      									</div>
      								</div>
      							</div>
      							<div className="pbmit-team-contact-area pbmit-bg-color-light">
      								<div className="row">
      									<div className="col-md-12 col-xl-6 pbmit-team-content">
      										<div className="pbmit-heading-subheading">
      											<h4 className="pbmit-subtitle"> Contact Us</h4>
      											<h2 className="pbmit-title"> Let’s discuss further to get better results</h2>
      											<div className="pbmit-heading-desc"> Didn’t find the answer you were looking for? Please <br />ask to our customer service department.</div>
      										</div>
      										<div className="pbmit-team-icon-box-area">
      											<div className="pbmit-team-icon-box">
      												<div className="pbmit-team-icon">
      													<div className="pbmit-team-icon-wrapper pbmit-icon-type-icon">
      														<svg id="pbmit_04" enableBackground="new 0 0 55 55" viewBox="0 0 55 55" xmlns="http://www.w3.org/2000/svg">
      															<g>
      																<path d="m21.5697021 34.1262817h-10.8833007c-.4140625 0-.75.3359375-.75.75s.3359375.75.75.75h10.8833008c.4140625 0 .75-.3359375.75-.75s-.3359376-.75-.7500001-.75z"></path>
      																<path d="m35.8450928 5.949584c-7.5899658 0-13.9299316 4.5800171-15.3999023 10.6500254v.0003052h-13.2402344c-2.0678711 0-3.75 1.6826172-3.75 3.75v18.5996094c0 2.0673828 1.6821289 3.75 3.75 3.75h1.8500977v4.5898438c0 1.5756874 1.9022541 2.3462677 2.9897461 1.2412109l5.840332-5.8310547h16.9897461c2.0678711 0 3.75-1.6826172 3.75-3.75v-6.5498657c.1015434-.0175934.7044411-.071701 1.880249-.3800659.5100098-.1300049 1.0699463-.0100098 1.4899902.3200073l3.1700439 2.4799805c1.1029778.8540573 2.7600098.1029053 2.7600098-1.3499756v-4.9899902c0-.4300537.1499023-.8300171.4099121-1.1200562 2.1000977-2.3299561 3.2099609-5.1199951 3.2099609-8.0799561 0-7.3500376-7.0499267-13.3300181-15.6999511-13.3300181zm-.75 20.0100107v-.289978c0-.4100342.3300781-.75.75-.75.4100342 0 .75.3399658.75.75v.289978c0 .4099731-.3399658.75-.75.75-.4199219 0-.75-.3400268-.75-.75zm1.5-5.4600219v2.2999878c0 .4200439-.3399658.75-.75.75-.4199219 0-.75-.3299561-.75-.75v-2.9899902c0-.4099731.3300781-.75.75-.75 1.5700684 0 2.8500977-1.2799683 2.8500977-2.8499756s-1.2800293-2.8500376-2.8500977-2.8500376-2.8499756 1.2800293-2.8499756 2.8500376c0 .4099731-.3399658.75-.75.75-.4200439 0-.75-.3400269-.75-.75 0-2.4000254 1.9500732-4.3500376 4.3499756-4.3500376 2.4000244 0 4.3500977 1.9500122 4.3500977 4.3500376-.0000001 2.1400146-1.5600587 3.9299926-3.6000977 4.289978zm-1.7202149 20.6999511h-17.2998047c-.1987305 0-.3891602.0791016-.5297852.21875l-6.0649414 6.0556641c-.1568232.1576195-.425293.0514565-.425293-.1845703v-5.3398438c0-.4140625-.3359375-.75-.75-.75h-2.6000975c-1.2407227 0-2.25-1.0097656-2.25-2.25v-18.5996093c0-1.2402344 1.0092773-2.25 2.25-2.25h12.9802246c-.1881084 1.8314857.0571899 3.7361622.8199463 5.5697021h-10.3199463c-.4101563 0-.75.3399658-.75.75 0 .4099731.3398438.75.75.75h11.0599365c.8099365 1.3999634 1.9100342 2.6699829 3.2299805 3.7299805.0001221.000061.0001221.000061.0001221.0001221h-14.2902833c-.4140625 0-.75.3359375-.75.75s.3359375.75.75.75h16.4904785c3.1530914 1.7924309 6.9823875 2.4523354 9.9494629 2.1698608v6.3799438c0 1.2402344-1.0092773 2.25-2.25 2.25z"></path>
      															</g>
      														</svg>
      													</div>
      												</div>
      											</div>
      											<div className="pbmit-icon-box-content">
      												<h2 className="pbmit-icon-box-heading"> Ask Questions</h2>
      												<h4 className="pbmit-icon-box-text-1">
      													<a href="#"> +97 155 596 1659</a>
      												</h4>
      												<h4 className="pbmit-icon-box-text-2">
      													<a href="#"> info@example.com</a>
      												</h4>
      											</div>
      										</div>
      									</div>
      									<div className="col-md-12 col-xl-6 pbmit-team-contact-form-wrap">
      										<ContactForm className="contact-form" />
      									</div>
      								</div>
      							</div>
      						</div>
      					</div>
      				</div>
      			</section>
      			{/* Team Single Detail end */}
      
      		</div>
      		{/* Page Content End */}
    </>
  )
}
