let loadLazyLoadScript = false;

document.addEventListener('DOMContentLoaded', () => {
	loadFonts();
	correctVh();
	lazyLoad();
	initSliderLastOfGallery();
	openUserProfileInHeader();
	scrollVideoCats();
});

window.addEventListener('resize', () => {
	correctVh();
});

// load fonts
function loadFonts() {
	WebFont.load({
		// custom: {
		// 	families: ['Graffiti1CTT', 'Stalker-font', 'Font Awesome 5 Brands'],
		// 	// urls: ['/fonts/fonts.css']
		// 	urls: [wp_helper.home_path + '/assets/css/fonts.css']
		// },
		google: {
			families: ['Roboto Condensed:n5', 'Oswald:400', 'Fira Sans Condensed:400']
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


function initSliderLastOfGallery() {
	const swiper = new Swiper('.swiper-gallery', {
		speed: 900,
		loop: true,
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



function openUserProfileInHeader() {
	const btnOpen = document.querySelector('.user-profile');

	if (btnOpen) {
		btnOpen.children[0].addEventListener('click', event => {
			event.preventDefault();
			btnOpen.classList.toggle("open");
		});

		document.addEventListener('click', function (evt) {
			const isClickedOutside = !btnOpen.contains(evt.target);
			if (isClickedOutside) {
				btnOpen.classList.remove("open");
			}
		});
	}
}






function scrollVideoCats() {
	var container = document.querySelector('.catsTable');
	let btnPrev = document.querySelector('.btn-prev');
	let btnNext = document.querySelector('.btn-next');
	let btnPrevHolder = document.querySelector('.btn-prev-holder');
	let btnNextHolder = document.querySelector('.btn-next-holder');


	function scrollContainer(direction, scrollWidth) {
		container.scrollBy({
			left: direction + scrollWidth,
			behavior: 'smooth'
		})
	}

	if (btnNextHolder) {
		btnNext.addEventListener('click', function (evt) {
			evt.preventDefault();

			if (container.scrollLeft + 300 >= container.scrollWidth - container.offsetWidth) {
				btnNextHolder.classList.add('hide');
			}

			scrollContainer('+', 300);

			btnPrevHolder.classList.remove('hide');
		});
	}

	if (btnPrevHolder) {
		btnPrev.addEventListener('click', function (evt) {
			evt.preventDefault();

			if (container.scrollLeft - 300 <= 0) {
				btnPrevHolder.classList.add('hide');
			}

			scrollContainer('-', 300);

			btnNextHolder.classList.remove('hide');
		});
	}

}





