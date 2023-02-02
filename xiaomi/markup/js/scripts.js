

document.addEventListener('DOMContentLoaded', () => {
	initSwiper();
	initModal();
});



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
	const swiper = new Swiper(".swiper-banner", {
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true
		},
		autoplay: {
			delay: 1500,
			disableOnInteraction: true
		},
	});

	const swiper2 = new Swiper(".swiper-products", {
		slidesPerView: 2,
		spaceBetween: 0,
		autoHeight: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			768: {
				slidesPerView: 3,
			},
		},
		autoplay: {
			delay: 2500,
			disableOnInteraction: true
		},
	});

}





function initModal() {
	const open_btns = document.querySelectorAll('[click-slide]');
	const close_btns = document.querySelectorAll('.btn-modal-close');

	if (open_btns) {
		open_btns.forEach(el => {
			el.addEventListener('click', function (event) {
				event.preventDefault();
				const id = this.getAttribute("click-slide");
				document.querySelector(`#${id}`).classList.add('show');
				document.body.classList.add('overflow-disabled')

			})
		});
	}

	if (close_btns) {
		close_btns.forEach(el => {
			el.addEventListener('click', function (event) {
				event.preventDefault();
				el.parentNode.parentNode.classList.remove('show');
				document.body.classList.remove('overflow-disabled')
			})
		});
	}
}

