let loadLazyLoadScript = false;

document.addEventListener('DOMContentLoaded', () => {
	headerCustomize();
	correctVh();
	lazyLoad();
	mobileMenu();
	initSlides()
	fancyboxImges();
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
	const openBtn = document.querySelector('.dropdown-menu-wrapper');

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

// function headerCustomize() {
// 	let headerVariants = [];
// 	const btns = document.querySelectorAll('[header-customize]');



// 	function initButtons() {
// 		if (btns) {
// 			btns.forEach((btn) => {
// 				headerVariants.push(btn.children[0].id);

// 				btn.addEventListener('click', function (event) {
// 					setStorage(this.children[0].id);
// 					getStorage();
// 				})


// 				if (localStorage.getItem('header-bg') === btn.children[0].id) {
// 					btn.children[0].checked = true;
// 				}
// 			})
// 		}
// 	}

// 	initButtons();

// 	function setStorage(value) {
// 		localStorage.setItem('header-bg', value);
// 	}

// 	function getStorage() {
// 		const key = localStorage.getItem('header-bg');

// 		if (key && key.length > 0) {
// 			clearClasses(headerVariants);
// 			document.body.classList.add(key);
// 		} else {
// 			setStorage('header-bg-1');
// 			getStorage();
// 			initButtons();
// 		}
// 	}

// 	function clearClasses(list) {
// 		list.forEach(item => {
// 			document.body.classList.remove(item)
// 		});
// 	}


// 	getStorage();
// }

function headerCustomize() {
	let headerVariants = [];
	const btns = document.querySelectorAll('[header-customize]');
	const key = localStorage.getItem('header-bg');
	const img = document.querySelector('.illustration-holder .lazyload-bg');
	const imgSrc = img.getAttribute('data-src');

	getStorage();

	function initButtons() {
		if (btns) {
			btns.forEach((btn) => {
				headerVariants.push(btn.children[0].id);

				btn.addEventListener('click', function (event) {
					setStorage(this.children[0].id);
					img.parentNode.style.cssText = `background-image: url(${imgSrc.replace("header-1", replaceStr(this.children[0].id))})`;
				})


				if (localStorage.getItem('header-bg') === btn.children[0].id) {
					btn.children[0].checked = true;
				}
			})
		}
	}

	initButtons();

	function setStorage(value) {
		localStorage.setItem('header-bg', value);
	}

	function replaceStr(str) {
		return str.replace(/header-bg-(\d+)/g, 'header-$1');
	}

	function getStorage() {
		const img = document.querySelector('.illustration-holder .lazyload-bg');
		let imgSrc = img.getAttribute('data-src');

		if (key && key.length > 0) {
			img.setAttribute('src', '#');
			img.setAttribute('data-src', imgSrc.replace("header-1", replaceStr(key)));
		} else {
			setStorage('header-bg-1');
		}
	}

}