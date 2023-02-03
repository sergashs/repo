

document.addEventListener('DOMContentLoaded', () => {
	initSwiper();
	initModal();
	changeGiftLink();
});


function setupFlip(tick) {
	const tickEl = document.querySelector('.tick');
	let balance = Math.floor(Math.random() * (70 - 50 + 1) + 50);
	tickEl.setAttribute('data-value', balance);

	Tick.helper.interval(function () {
		if (!balance == 0) {
			tick.value--;
			balance--;
			tick.root.setAttribute(
				'aria-label',
				tick.value
			);
		}
	}, 3000);
}


function changeGiftLink() {
	const links = document.querySelectorAll('.btn-get-gift');
	const url = 'http://google.com';


	links.forEach((link) => {
		link.addEventListener('click', (event) => {
			event.preventDefault();
			window.open(url, '_blank')
		})

	});
}


function addRemoveClass() {
	// const element = document.querySelector('.mi-flash-sale-counter');

	// function startAnim() {
	// 	const interval = setInterval(() => {
	// 		element.classList.remove('hide');
	// 		element.classList.add('show');

	// 		clearInterval(interval);

	// 		setTimeout(() => {
	// 			element.classList.remove('show');
	// 			element.classList.add('hide');
	// 			startAnim();
	// 		}, 2500);
	// 	}, 2000);
	// }

	// startAnim();


	// const el = document.querySelector('.mi-flash-sale-counter-digits');
	// let balance = Math.floor(Math.random() * (70 - 50 + 1) + 50);

	// el.innerHTML = balance;

	// setInterval(() => {
	// 	if (balance > 0) {
	// 		el.innerHTML = balance--;

	// 		console.log('e')
	// 	}

	// }, 100);
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
	const swiper = new Swiper(".swiper-banner", {
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: true,
		speed: 1000,
		pagination: {
			el: ".swiper-pagination",
			clickable: true
		},
		autoplay: {
			delay: 5000,
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


