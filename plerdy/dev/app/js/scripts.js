

document.addEventListener('DOMContentLoaded', () => {
	loadFonts();
	mobileMenu();
	initSwiper();
});


// load fonts
function loadFonts() {
	WebFont.load({
		custom: {
		},
		google: {
			families: ['Roboto:400,500,700,900']
		}
	});
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



function initSwiper() {
	const swiper = new Swiper(".mySwiper", {

		slidesPerView: 1,
		spaceBetween: 17,
		autoHeight: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true
		},

		breakpoints: {
			575: {
				slidesPerView: 2.1,
			},
			768: {
				slidesPerView: 2.5,
			},
			992: {
				slidesPerView: 3.2,
			},
			1200: {
				slidesPerView: 4.2,
			}
		}
	});
}
