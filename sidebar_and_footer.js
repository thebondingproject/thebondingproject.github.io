
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
					<li><a href="project_overview.html">Project Overview</a></li>\
					<li><a href="wedge_bond_procedure.html">The Wedge Bond Procedure</a></li>\
					<li>\
						<span class="opener">Development Pages</span>\
						<ul>\
        					<li><a href="page_template.html">Page Template</a></li>\
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