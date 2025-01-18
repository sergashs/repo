let loadLazyLoadScript = false;

document.addEventListener('DOMContentLoaded', () => {
	headerCustomize();
	correctVh();
	lazyLoad();
	mobileMenu();
	initSlides()
	fancyboxImges();
	starsRating();
	initTooltips();
});

window.addEventListener('resize', () => {
	correctVh();
});

function starsRating() {
	const ratingStars = [...document.querySelectorAll("#comment-rating-form .rating-form-star")];

	if (ratingStars) {
		function executeRating(stars, result) {
			const starClassActive = "rating-form-star active";
			const starClassHalf = "rating-form-star half";
			const starClassUnactive = "rating-form-star unactive";
			const starsLength = stars.length;

			stars.forEach((star, index) => {
				star.onclick = (event) => {
					const rect = star.getBoundingClientRect();
					const clickX = event.clientX - rect.left;

					if (clickX < rect.width / 2) {
						printRatingResult(result, index + 0.5);
						console.log(event.target)
						setStars(stars, starClassActive, index);
						event.target.className = starClassHalf;
					} else {
						printRatingResult(result, index + 1);
						setStars(stars, starClassActive, index);
					}
				};
			});
		}

		function setStars(stars, className, endIndex) {
			for (let i = 0; i <= endIndex; i++) {
				stars[i].className = className;
			}
			for (let i = endIndex + 1; i < stars.length; i++) {
				stars[i].className = "rating-form-star unactive";
			}
		}

		function printRatingResult(result, num = 0) {
			const input = document.querySelector('#rating-form-star');
			input.value = num;
		}

		executeRating(ratingStars);
	}
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

		});
	}
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
	if (document.querySelector('.swiper-buy-game')) {
		const swiper = new Swiper('.swiper-buy-game', {
			speed: 900,
			loop: true,
			effect: "fade",
			slidesPerView: 1,
			spaceBetween: 10,
			lazy: {
				loadPrevNext: true,
			},
			autoplay: {
				delay: 2000,
			},
		})
	}

	if (document.querySelector('.swiper-new-mods')) {
		const swiper2 = new Swiper('.swiper-new-mods', {
			speed: 900,
			// loop: true,
			slidesPerView: 1,
			spaceBetween: 20,
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


	if (document.querySelector('.swiper-new-comments')) {
		const swiper3 = new Swiper('.swiper-new-comments', {
			speed: 900,
			// loop: true,
			slidesPerView: 1,
			spaceBetween: 20,
			pagination: {
				el: ".swiper-new-comments .swiper-pagination",
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
}

// fancyboxImges
function fancyboxImges() {
	const images = document.querySelectorAll('.single-post .wp-block-image.size-full');
	const imagesLarge = document.querySelectorAll('.single-post .wp-block-image.size-large');

	if (images) {
		images.forEach(function (item) {
			const src = item.childNodes[0].getAttribute('src');
			const link = document.createElement('a');
			link.setAttribute('href', src);
			link.setAttribute('data-fancybox', 'wp-gallery');
			link.setAttribute('data-src', src);
			link.style.cursor = 'zoom-in';
			item.childNodes[0].parentNode.insertBefore(link, item.childNodes[0]);
			item.childNodes[0].appendChild(item.childNodes[1]);
		})
	}

	if (imagesLarge) {
		imagesLarge.forEach(function (item) {
			const src = item.querySelector('img').getAttribute('src');
			item.childNodes[0].setAttribute('data-fancybox', 'wp-gallery');
			item.childNodes[0].style.cursor = 'zoom-in';
			item.childNodes[0].setAttribute('data-src', src);
		})
	}
}

function initTooltips() {
	const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
	if (tooltipTriggerList) {
		const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
	}
}

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

