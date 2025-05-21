
//Vedi "javascript - Include another HTML file in a HTML file - Stack Overflow.pdf"
document.write('\
<!-- Sidebar -->\
<div id="sidebar">\
	<div class="inner">\
		<!-- Menu -->\
			<nav id="menu">\
				<header class="major">\
					<h2>Menu</h2>\
				</header>\
				<ul>\
					<li><a href="index.html">Homepage</a></li>\
					<li><a href="project_overview.html">Project overview</a></li>\
					<li><a href="system_architecture.html">System architecture</a></li>\
					<li><a href="mechanical_description.html">Mechanical description</a></li>\
					<li><a href="motor_control.html">Motor control</a></li>\
					<li><a href="master_board.html">Master board</a></li>\
					<li><a href="ultrasonic_driver.html">Ultrasonic driver</a></li>\
					<li><a href="heating_stage.html">Heating stage</a></li>\
					<li><a href="camera_and_optics.html">Camera and optics</a></li>\
					<li><a href="downloads.html">Downloads</a></li>\
					<li>\
						<span class="opener">Development Pages</span>\
						<ul>\
        					<li><a href="page_template_basic.html">Basic page template</a></li>\
        					<li><a href="page_template.html">Page template</a></li>\
        					<li><a href="elements.html">Elements</a></li>\
						</ul>\
					</li>\
				</ul>\
			</nav>\
		<!-- Section -->\
			<section>\
				<header class="major">\
					<h2>Get in touch</h2>\
				</header>\
				<ul class="contact">\
					<li class="icon solid fa-envelope">devs.thebondingproject(at)gmail.com</li>\
					<li class="icon solid fa-envelope">danelutti.massimo(at)spes.uniud.it</li>\
					<li class="icon solid fa-envelope">minigher.claudio(at)spes.uniud.it</li>\
					<li class="icon solid fa-envelope">sanson.luca(at)spes.uniud.it</li>\
					<li class="icon solid fa-home">Via delle Scienze, 206<br/>Udine, 33100, Italy</li>\
				</ul>\
			</section>\
		<!-- Footer -->\
			<footer id="footer">\
				<p class="copyright">&copy; The Bonding Project, a lab project by the University of Udine. All rights reserved. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>\
			</footer>\
	</div>\
</div>\
');