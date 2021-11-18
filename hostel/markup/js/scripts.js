let loadLazyLoadScript = false;

document.addEventListener('DOMContentLoaded', () => {
	loadFonts();
	correctVh();
	lazyLoad();
	mobileMenu();
	headerDropdowns();
	initSwiper();
});

window.addEventListener('resize', () => {
	correctVh();
});

// load fonts
function loadFonts() {
	WebFont.load({
		custom: {
			families: ['Museo Sans Cyrl:n3,n7', 'Font Awesome 5 Brands'],
			urls: ['css/fonts.css']
		},
		google: {
			families: ['Ubuntu:300,400,500', 'Myriad Pro:400']
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

function headerDropdowns() {
	const menuNav = document.querySelectorAll('.has-dropdown');

	if (menuNav) {
		menuNav.forEach(item => {

			item.children[0].addEventListener('click', event => {

				function prevntDefault() {
					if (item.classList.contains("open")) {
					} else {
						event.preventDefault();
					}
				}

				function closeClickOutSide() {
					document.addEventListener('click', function (evt) {
						const isClickedOutside = !item.contains(evt.target);
						if (isClickedOutside) {
							item.classList.remove("open");
							item.children[2].style.maxHeight = null;
						}
					});
				}

				window.addEventListener('resize', e => {
					setTimeout(() => {
						if (window.innerWidth > 768 && window.innerWidth < 991) {
							prevntDefault();
							closeClickOutSide();
						} else {

						}
					}, 50);
				});


				if (window.innerWidth > 768 && window.innerWidth < 991) {
					prevntDefault();
					closeClickOutSide();
				} else {

				}


				item.classList.toggle("open");

				if (item.classList.contains("open")) {
					item.children[2].style.maxHeight = item.children[2].scrollHeight + "px";
				} else {
					item.children[2].style.maxHeight = null;
				}

			});


			item.children[1].addEventListener('click', event => {
				item.classList.toggle("open");

				if (item.classList.contains("open")) {
					item.children[2].style.maxHeight = item.children[2].scrollHeight + "px";
				} else {
					item.children[2].style.maxHeight = null;
				}
			});

		});
	}
}



function initSwiper() {
	var x = document.getElementsByClassName("swiper-safe");

	for (var i = 0; i < x.length; i++) {

		var el = x[i];

		var swiper = el.getElementsByClassName("swiper")[0];
		var nx = el.getElementsByClassName("swiper-button-next")[0];
		var pr = el.getElementsByClassName("swiper-button-prev")[0];

		new Swiper(swiper, {
			slidesPerView: 1,
			spaceBetween: 40,
			navigation: {
				nextEl: nx,
				prevEl: pr
			},
			preloadImages: true,
			lazy: {
				loadPrevNext: true,
			},
			breakpoints: {
				765: {
					slidesPerView: 2,
				},

				1240: {
					slidesPerView: 3,
				}
			},
		});
	}

	// const swiper1 = document.querySelector(".swiper-managment");
	// const swiperNavNext = document.querySelector(".swiper-button-next");
	// const swiperNavPrev = document.querySelector(".swiper-button-prev");

	// const swiper = new Swiper(swiper1, {
	// 	navigation: {
	// 		nextEl: swiperNavNext,
	// 		prevEl: swiperNavPrev,
	// 	},
	// 	spaceBetween: 40,
	// 	slidesPerView: 3,
	// 	preloadImages: true,
	// 	lazy: {
	// 		loadPrevNext: true,
	// 	},

	// 	breakpoints: {
	// 		765: {
	// 			slidesPerView: 2,
	// 		},

	// 		1240: {
	// 			slidesPerView: 3,
	// 		}
	// 	},
	// });

}


// jQuery
(function ($) {
	'use strict';

	$(document).ready(function () {
	}); // ready

	$(window).on('resize', function () {
	}); // resize

	$(window).on('load', function () {
	}); // load

	// functions
})(this.jQuery);


