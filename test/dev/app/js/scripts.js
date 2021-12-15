let objectFitPoly = false;
let loadLazyLoadScript = false;

document.addEventListener('DOMContentLoaded', () => {
	loadFonts();
	correctVh();
	lazyLoad();
	mobileMenu();
	animations();
});

window.addEventListener('resize', () => {
	correctVh();
});

// load fonts
function loadFonts() {
	WebFont.load({
		custom: {
		},
		google: {
			families: ['Roboto:300,500,700']
		}
	});
}

// lazyLoad Images
function lazyLoad() {
	if ('loading' in HTMLImageElement.prototype) {
		var images = document.querySelectorAll('img.lazyload');
		images.forEach(function (img) {
			img.src = img.dataset.src;
			img.onload = function () {
				img.classList.add('lazyloaded');
			};
			if (img.classList.contains('svg-html')) {
				replaseInlineSvg(img);
			}
			if (img.classList.contains('lazyload-bg')) {
				img.style.display = "none";
				img.parentNode.style.backgroundImage = "url(" + img.dataset.src + ")";
			}
		});
	} else {
		if (!loadLazyLoadScript) {
			loadLazyLoadScript = true;
			var script = document.createElement("script");
			script.async = true;
			script.src = '/js/lazysizes.min.js';
			document.body.appendChild(script);
		}
		document.addEventListener('lazyloaded', function (e) {
			var img = e.target;
			if (img.classList.contains('lazyload-bg')) {
				img.style.display = 'none';
				img.parentNode.style.backgroundImage = 'url(' + img.dataset.src + ')';
			}
			if (img.classList.contains('svg-html')) {
				replaseInlineSvg(img);
			}
		});
	}
}

// replaseInlineSvg
function replaseInlineSvg(el) {
	const imgID = el.getAttribute('id');
	const imgClass = el.getAttribute('class');
	const imgURL = el.getAttribute('src');

	fetch(imgURL)
		.then(data => data.text())
		.then(response => {
			const parser = new DOMParser();
			const xmlDoc = parser.parseFromString(response, 'text/html');
			let svg = xmlDoc.querySelector('svg');

			if (typeof imgID !== 'undefined') {
				svg.setAttribute('id', imgID);
			}

			if (typeof imgClass !== 'undefined') {
				svg.setAttribute('class', imgClass + ' replaced-svg');
			}

			svg.removeAttribute('xmlns:a');

			el.parentNode.replaceChild(svg, el);
		});
}

// correctVh
function correctVh() {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', vh + 'px');
}

// mobile menu
function mobileMenu() {
	const openBtn = document.querySelector('.open-menu');

	openBtn.addEventListener('click', function (event) {
		event.preventDefault();
		if (document.body.classList.contains('menu-opened')) {
			document.body.classList.remove('menu-opened');
		} else {
			document.body.classList.add('menu-opened');
		}
	});
};

function animations() {
	window.sr = ScrollReveal();
	sr.reveal('.animation-fade', {
		scale: 1,
		reset: false,
		//mobile: false,
		duration: 1500,
		distance: '0',
		origin: 'bottom',
		beforeReveal: function (el) {
			setTimeout(function () {
				el.classList.add('shown');
			}, 1500);
		}
	});
	sr.reveal('.fade-in-delay', {
		scale: 1,
		reset: false,
		//mobile: false,
		duration: 1500,
		distance: '0',
		origin: 'bottom',
		interval: 200,
		beforeReveal: function (el) {
			setTimeout(function () {
				el.classList.add('shown');
			}, 1500);
		}
	});
	sr.reveal('.animation-left', {
		scale: 1,
		reset: false,
		opacity: 0,
		//mobile: false,
		duration: 1500,
		distance: '50%',
		origin: 'left',
		delay: 500,
		beforeReveal: function (el) {
			setTimeout(function () {
				el.classList.add('shown');
			}, 1500);
		}
	});
	sr.reveal('.animation-right', {
		scale: 1,
		reset: false,
		opacity: 0,
		//mobile: false,
		duration: 1500,
		distance: '50%',
		origin: 'right',
		beforeReveal: function (el) {
			setTimeout(function () {
				el.classList.add('shown');
			}, 1500);
		}
	});
	sr.reveal('.animation-up', {
		scale: 1,
		reset: false,
		//mobile: false,
		duration: 1500,
		distance: '70px',
		origin: 'bottom',
		beforeReveal: function (el) {
			setTimeout(function () {
				el.classList.add('shown');
			}, 1500);
		}
	});
	sr.reveal('.animation-down', {
		scale: 1,
		reset: false,
		//mobile: false,
		duration: 1500,
		distance: '70px',
		origin: 'top',
		beforeReveal: function (el) {
			setTimeout(function () {
				el.classList.add('shown');
			}, 1500);
		}
	});
	sr.reveal('.animation-scale', {
		scale: 0,
		reset: false,
		opacity: 1,
		//mobile: false,
		duration: 1500,
		beforeReveal: function (el) {
			setTimeout(function () {
				el.classList.add('shown');
			}, 1500);
		}
	});
	sr.reveal('.animation-interval', {
		scale: 1,
		reset: false,
		//mobile: false,
		duration: 1500,
		distance: '70px',
		interval: 300,
		origin: 'bottom',
		beforeReveal: function (el) {
			setTimeout(function () {
				el.classList.add('shown');
			}, 1500);
		}
	});

	sr.reveal('.animation-interval-group > *', {
		scale: 1,
		reset: false,
		//mobile: false,
		duration: 1500,
		distance: '70px',
		interval: 300,
		origin: 'bottom',
		beforeReveal: function (el) {
			setTimeout(function () {
				el.classList.add('shown');
			}, 1500);
		}
	});

	sr.reveal('.appear', {
		origin: 'top',
		distance: '0px',
		duration: 800,
		delay: 300,
		scale: 1,
		opacity: 1,
		mobile: true,
		reset: false,
		easing: 'ease',
		beforeReveal: function (el) {
			setTimeout(function () {
				el.classList.add('shown');
			}, 1000);
		}
	});
}
