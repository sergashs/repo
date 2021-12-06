let loadLazyLoadScript = false;

document.addEventListener('DOMContentLoaded', () => {
	loadFonts();
	correctVh();
	lazyLoad();
	animationOnScroll();
});

window.addEventListener('resize', () => {
	correctVh();
});

// load fonts
function loadFonts() {
	WebFont.load({
		custom: {
			families: ['Proxima Nova:300,400,700,800,900'],
			urls: ['css/fonts.css']
		},
		google: {
			families: ['Playfair Display:n4']
		}
	});
}

// lazyLoad Images
function lazyLoad() {
	if ('loading' in HTMLImageElement.prototype) {
		const images = document.querySelectorAll('img.lazyload');
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
			const script = document.createElement("script");
			script.async = true;
			script.src = 'js/lazysizes.min.js';
			document.body.appendChild(script);
		}
		document.addEventListener('lazyloaded', function (e) {
			const img = e.target;
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


// correctVh
function correctVh() {
	const vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', vh + 'px');
}

// animation on scroll
function animationOnScroll() {
	ScrollReveal().reveal('.animation-up', {
		reset: false,
		duration: 1000,
		opacity: 0,
		cleanup: true,
		origin: 'bottom',
		distance: '70px',
		viewOffset: {
			top: 200,
		},
		afterReveal: function (el) {
			el.classList.add('shown');
		},
	});

	ScrollReveal().reveal('.animation-interval > *', {
		reset: false,
		duration: 1500,
		cleanup: true,
		origin: 'bottom',
		distance: '70px',
		interval: 200,
		viewOffset: {
			top: 200,
		},
		afterReveal: function (el) {
			el.classList.add('shown');
		},
	});
}

