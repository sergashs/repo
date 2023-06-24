let loadLazyLoadScript = false;

document.addEventListener('DOMContentLoaded', () => {
	correctVh();
	lazyLoad();
	mobileMenu();
	initSliderBuyGames();
	fancyboxImges();
	initModals();
	showTelegramModal();
	initCustomScrollBar();
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


function initSliderBuyGames() {
	const swiper = new Swiper('.swiper-buy-game', {
		speed: 900,
		loop: true,
		effect: "fade",
		slidesPerView: 1,
		spaceBetween: 10,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		lazy: {
			loadPrevNext: true,
		},
		autoplay: {
			delay: 2000,
		},
	})
}

// show telegram-modal
function showTelegramModal() {
	const storage = localStorage.getItem('showTelegram') || null;

	if (storage) {
		document.querySelector('#modal-notify').classList.remove('open');
		document.querySelector(".modal-overlay").classList.remove('active');
	} else {
		document.querySelector(".modal-overlay").classList.add('active');
		document.querySelector('#modal-notify').classList.add('open');
		localStorage.setItem('showTelegram', true)
	}
}

// modals 
function initModals() {
	const btns = document.querySelectorAll("[modal-id]");
	const overlay = document.querySelector(".modal-overlay");
	const modals = document.querySelectorAll(".modal-block");

	if (btns) {
		function deleteActiveClass() {
			for (modal of modals) {
				modal.classList.remove("open");
			}
		}

		document.addEventListener('click', function (e) {
			let modalOpener = document.querySelector('[modal-id]');
			let isInsideOpener = e.target.closest('[modal-id]');

			if (modalOpener === e.target || isInsideOpener) {
				e.preventDefault();
				deleteActiveClass();
				const modalID = e.target.getAttribute('modal-id');
				const modal = document.getElementById(modalID);
				overlay.classList.add("active");
				modal.classList.add("open");

			}

			let modalClose = e.target.closest('.btn-close-modal');
			if (modalClose) {
				e.preventDefault();
				overlay.classList.remove("active");
				e.target.closest('.modal-block').classList.remove("open");

			}
		});

		if (overlay) {
			overlay.addEventListener("click", function (e) {
				if (e.target == overlay) {
					document.querySelector(".modal-block.open").classList.remove("open");
					overlay.classList.remove("active");

				}
			});
		}

	}
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


function initCustomScrollBar() {
	// Array.prototype.forEach.call(
	// 	document.querySelectorAll('.scroll'),
	// 	(el) => new SimpleBar(el, {
	// 		forceVisible: 'y',
	// 		autoHide: false,
	// 		scrollbarColor: '#888/#f1f1f1'
	// 	})
	// );

	// const simpleBar = new SimpleBar(document.querySelector('.scroll-comments'), {
	// 	autoHide: false,
	// });




}