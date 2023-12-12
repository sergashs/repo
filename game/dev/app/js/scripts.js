let loadLazyLoadScript = false;

document.addEventListener('DOMContentLoaded', () => {
	correctVh();
	// lazyLoad();
	mobileMenu();
	// initSlides()
	// fancyboxImges();
	headerSearch();
});

window.addEventListener('resize', () => {
	correctVh();
});


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
			const svg = xmlDoc.querySelector('svg');

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
	const vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', vh + 'px');
}

// mobile menu
function mobileMenu() {
	const openBtn = document.querySelector('.open-menu-wrapper');

	openBtn.addEventListener('click', function (event) {
		event.preventDefault();
		if (document.body.classList.contains('menu-opened')) {
			document.body.classList.remove('menu-opened');
		} else {
			document.body.classList.add('menu-opened');
		}
	});
};


function initSlides() {
	const swiper = new Swiper('.swiper-buy-game', {
		speed: 900,
		loop: true,
		effect: "fade",
		slidesPerView: 1,
		spaceBetween: 10,
		// navigation: {
		// 	nextEl: ".swiper-buy-game .swiper-button-next",
		// 	prevEl: ".swiper-buy-game .swiper-button-prev",
		// },
		lazy: {
			loadPrevNext: true,
		},
		autoplay: {
			delay: 2000,
		},
	})

	const swiper2 = new Swiper('.swiper-new-mods', {
		speed: 900,
		loop: true,
		slidesPerView: 1,
		spaceBetween: 20,
		// navigation: {
		// 	nextEl: ".swiper-new-mods .swiper-button-next",
		// 	prevEl: ".swiper-new-mods .swiper-button-prev",
		// },
		pagination: {
			el: ".swiper-new-mods .swiper-pagination",
			clickable: true,
		},
		lazy: {
			loadPrevNext: true,
		},
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		breakpoints: {
			640: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 4,
			},
		},
	})
}

// fancyboxImges
function fancyboxImges() {
	const images = document.querySelectorAll('.wp-block-image a');

	if (images) {
		images.forEach(function (item) {
			const href = item.getAttribute("href");
			item.setAttribute('data-fancybox', 'wp-gallery');
			item.setAttribute('data-src', href);
		})
	}
}

function initTooltips() {
	const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
	if (tooltipTriggerList) {
		const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
	}
}


function headerSearch() {
	const block = document.querySelector('#header-block-search');
	const btns = block.querySelectorAll('.btn-toggle');
	const form = block.querySelector('.form-holder');

	if (btns) {
		btns.forEach((btn) => {
			btn.addEventListener('click', function (event) {
				event.preventDefault();

				block.classList.toggle('show');
			})
		})
	}
}