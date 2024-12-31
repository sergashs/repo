

document.addEventListener('DOMContentLoaded', () => {
	correctVh();
	menu();
	scrollDown();
	initSlider();
	initAccordion();
});

window.addEventListener('resize', () => {
	correctVh();
});

// correctVh
function correctVh() {
	const vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', vh + 'px');
}

function scrollDown() {
	var btnScrollDown = document.querySelector('[data-scroll-down]');


	btnScrollDown.addEventListener('click', function (event) {
		event.preventDefault();

		const section = document.querySelector('.section-about');
		const sectionTop = section.getBoundingClientRect().top + window.scrollY;

		window.scrollTo({
			top: sectionTop,
			behavior: "smooth"
		});
	});
}

function menu() {
	const openBtns = document.querySelectorAll('.open-menu');
	const menu = document.querySelector('.main-navigation');

	function syncHeight() {
		document.documentElement.style.setProperty(
			"--window-inner-height",
			`${window.innerHeight}px`
		);
	}
	window.addEventListener("resize", syncHeight);

	let scrollY;

	function preventDefault(e) {
		e.preventDefault();
	}

	function closeMenu() {
		document.documentElement.classList.remove("is-locked");
		document.body.classList.remove('menu-opened');
		menu.removeEventListener("pointermove", preventDefault);
		window.scrollTo(0, scrollY);
	}

	function openMenu() {
		scrollY = window.scrollY;
		document.documentElement.classList.add("is-locked");
		document.body.classList.add('menu-opened');
		menu.addEventListener("pointermove", preventDefault);
	}

	openBtns.forEach(btn => {
		btn.addEventListener('click', function (event) {
			event.preventDefault();
			if (document.body.classList.contains('menu-opened')) {
				closeMenu();
			} else {
				openMenu();
			}
		});
	});
};

function initSlider() {
	const swiper = new Swiper('.swiper-projects', {
		spaceBetween: 20,
		navigation: {
			nextEl: '.swiper-projects-buttons .swiper-button-next',
			prevEl: '.swiper-projects-buttons .swiper-button-prev',
		},
		breakpoints: {
			992: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			768: {
				slidesPerView: 3,
			},
			575: {
				slidesPerView: 2,
			},
			0: {
				slidesPerView: 1,
			},
		},
	});
}

function initAccordion() {
	new Accordion('.accordion-container', {
		duration: 400,
		openOnInit: [0],
	});
}