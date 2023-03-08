

document.addEventListener('DOMContentLoaded', () => {
	loadFonts();
	mobileMenu();
	initSwiper();
	initModal();
	contactFormValidation();
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




function initModal() {
	const open_btns = document.querySelectorAll('.btn-open-modal');
	const close_btns = document.querySelectorAll('.btn-modal-close');

	if (open_btns) {
		open_btns.forEach(el => {
			el.addEventListener('click', function (event) {
				event.preventDefault();
				const id = this.getAttribute("href");
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


function contactFormValidation() {
	const validate_btn = document.querySelector('.btn-validate-form');
	const name = document.querySelector('#input_name');
	const tel = document.querySelector('#input_phone');

	const initTellInput = window.intlTelInput(tel, {
		initialCountry: "ua",
		separateDialCode: true,
		nationalMode: true,
		utilsScript: "js/intlTelInput/utils.js",
	});

	name.addEventListener("input", () => {
		showErrorName();
	})

	tel.addEventListener("input", () => {
		showErrorTel();
	})

	function showErrorName() {
		if (!name.value) {
			name.parentNode.classList.add('error');
		} else {
			name.parentNode.classList.remove('error');
		}
	}

	function showErrorTel() {
		if (!tel.value) {
			tel.parentNode.parentNode.classList.add('error');
		} else {
			tel.parentNode.parentNode.classList.remove('error');
		}
	}

	function validate() {
		showErrorName();
		showErrorTel();

		if (name.value && tel.value) {
			alert(`validation successful\nsend data:\nname: ${name.value}, phone: ${initTellInput.getNumber()}\nto apiURL`);
			console.log(`validation successful\nsend data:\nname: ${name.value}, phone: ${initTellInput.getNumber()}\nto apiURL`)

			name.value = "";
			tel.value = "";
		}
	}

	validate_btn.addEventListener('click', function (event) {
		event.preventDefault();
		validate();
	})

}