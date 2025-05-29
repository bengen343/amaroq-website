class NavBar extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <header id="header" class="header-effect-shrink" data-plugin-options="{'stickyEnabled': true, 'stickyEffect': 'shrink', 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': false, 'stickyChangeLogo': true, 'stickyStartAt': 30, 'stickyHeaderContainerHeight': 70}">
				<div class="header-body header-body-bottom-border border-top-0">
					<div class="header-top">
						<div class="container">
							<div class="header-row">
								<div class="header-column justify-content-start">
									<div class="header-row">
										<ul class="list list-unstyled list-inline mb-0">
											<li class="list-inline-item text-color-dark me-md-4 mb-0">
												<i class="icons icon-phone text-color-primary text-4 position-relative top-2 me-1"></i>
												<a href="tel:+13039075467" class="text-color-dark text-color-hover-primary text-decoration-none">
													<strong>(303) 907-5467</strong>
												</a>
											</li>
											<li class="list-inline-item text-color-dark me-4 mb-0 d-none d-md-inline-block">
												<i class="icons icon-envelope text-color-primary text-4 position-relative top-4 me-1"></i>
												<a href="mailto:ben@amaroqanalytics.com" class="text-color-dark text-color-hover-primary text-decoration-none text-2">
													Ben@AmaroqAnalytics.com
												</a>
											</li>
										</ul>
									</div>
								</div>
								<div class="header-column justify-content-end">
									<div class="header-row">
										<ul class="header-social-icons social-icons social-icons-clean d-none d-lg-block">
											<!-- <li class="social-icons-instagram"><a href="http://www.instagram.com/" target="_blank" title="Instagram"><i class="fab fa-instagram"></i></a></li> -->
										</ul>
										<a href="https://calendly.com/benjamin-engen" class="btn btn-primary btn-px-4 py-3 font-weight-bold text-2 rounded-0 ms-lg-4" target="_blank">SCHEDULE CONSULTATION</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="header-container container">
						<div class="header-row">
							<div class="header-column">
								<div class="header-row">
									<div class="header-logo">
										<a href="index.html">
											<img src="img/logos/logo-text-horizontal.png" class="img-fluid" width="200" alt="Amaroq Analytics"/>
										</a>
									</div>
								</div>
							</div>
							<div class="header-column justify-content-end">
								<div class="header-row">
									<div class="header-nav header-nav-links">
										<div class="header-nav-main header-nav-main-text-capitalize header-nav-main-effect-2 header-nav-main-sub-effect-1">
											<nav class="collapse">
												<ul class="nav nav-pills" id="mainNav">
													<li>
														<a href="index.html" class="nav-link active">Home</a>
													</li>
													<li>
														<a href="demo-law-firm-2-about.html" class="nav-link">About</a>
													</li>
													<li class="dropdown">
														<a href="services.html" class="dropdown-item dropdown-toggle">Services</a>
														<ul class="dropdown-menu border-radius-0">
															<li>
																<a href="services-ai.html" class="nav-link">AI/ML Enablement</a>
															</li>
															<li>
																<a href="services-bi.html" class="nav-link">BI & Dashboarding</a>
															</li>
															<li>
																<a href="services-governance.html" class="nav-link">Data Governance & Quality</a>
															</li>
															<li>
																<a href="services-modeling.html" class="nav-link">Data Modeling</a>
															</li>
															<li>
																<a href="services-roadmap.html" class="nav-link">Data Strategy & Roadmap</a>
															</li>
															<li>
																<a href="services-elt.html" class="nav-link">ELT Pipeline Development</a>
															</li>
														</ul>
													</li>
													<li>
														<a href="demo-law-firm-2-attorney.html" class="nav-link">Attorney</a>
													</li>
													<li>
														<a href="demo-law-firm-2-case-study.html" class="nav-link">Case Study</a>
													</li>
													<li>
														<a href="https://bengen.medium.com/" target="_blank" class="nav-link">Blog</a>
													</li>
													<li>
														<a href="demo-law-firm-2-contact.html" class="nav-link">Contact</a>
													</li>
												</ul>
											</nav>
										</div>
									</div>
									<button class="btn header-btn-collapse-nav" data-bs-toggle="collapse" data-bs-target=".header-nav-main nav">
										<i class="fas fa-bars"></i>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
            
        <!-- header close -->
        `;
    }
}
customElements.define('nav-bar', NavBar);
