class MyFooter extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <footer id="footer" class="border-0 pt-4 mt-0">
				<div class="container py-5">
					<div class="row py-4">
						<div class="col-lg-3 mb-5 mb-lg-0">
							<h5 class="text-transform-none font-weight-bold text-color-light text-5-5 mb-4">About</h5>
							<p class="text-3-5">Amaroq Analytics is a modern data consultancy empowering businesses with solutions across the modern data stack. </p>
							<a href="demo-law-firm-2.html" class="text-decoration-none">
								<img src="img/logos/logo-text-horizontal-light.png" class="img-fluid" alt="Amaroq Analytics" width="200"/>
							</a>
						</div>
						<div class="col-lg-3 mb-5 mb-lg-0">
							<h5 class="text-transform-none font-weight-bold text-color-light text-5-5 mb-4">Useful Links</h5>
							<ul class="list list-unstyled text-3-5 mb-0">
								<li class="mb-2"><a href="#">Features</a></li>
								<li class="mb-2"><a href="#">Pages</a></li>
								<li class="mb-2"><a href="#">Portfolio</a></li>
								<li class="mb-2"><a href="demo-law-firm-2-about.html">About Us</a></li>
								<li class="mb-0"><a href="demo-law-firm-2-contact.html">Contact Us</a></li>
							</ul>
						</div>
						<div class="col-lg-3 mb-5 mb-lg-0"></div>
						<div class="col-lg-3">
							<h5 class="text-transform-none font-weight-bold text-color-light text-5-5 mb-4">Contact</h5>
							<ul class="list list-unstyled mb-4">
								<li>
									<i class="icons icon-phone text-color-primary text-5-5 position-relative top-2 me-2"></i>
									<a href="tel:+13039075467" class="text-color-light font-weight-bold text-decoration-none text-5">(303) 907-5467</a>
								</li>
								<li class="mb-3">
									<i class="icons icon-envelope text-color-primary text-6 position-relative top-6 me-2"></i>
									<a href="mailto:Ben@AmaroqAnalytics.com" class="text-color-light text-decoration-none text-4">Ben@AmaroqAnalytics.com</a>
								</li>
							</ul>
							<ul class="custom-social-icons-style-1 social-icons social-icons-clean">
								<!-- <li class="social-icons-instagram"><a href="http://www.instagram.com/" class="no-footer-css" target="_blank" title="Instagram"><i class="fab fa-instagram"></i></a></li> -->
							</ul>
						</div>
					</div>
				</div>
				<div class="footer-copyright py-4">
					<div class="container py-2">
						<div class="row">
							<div class="col">
								<p class="text-center text-3 mb-0">Amaroq Analytics © 2025. All Rights Reserved.</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
        `;
    }
}
customElements.define('my-footer', MyFooter);
