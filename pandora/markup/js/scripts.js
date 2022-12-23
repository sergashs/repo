

document.addEventListener('DOMContentLoaded', () => {
	loadFonts();
	initSwiper();
	initPoll();
});



// load fonts
function loadFonts() {
	WebFont.load({
		custom: {
			families: ['Pan Display:400,700'],
			urls: ['css/fonts.css']
		},
	});
}

function initPoll() {
	const pollBlocks = document.querySelectorAll('.poll-block');
	const btns = document.querySelectorAll('.poll-block .btn');
	// let form = [];
	let step = 1;
	const stepEl = document.querySelector('.poll-quantity-counter');

	btns.forEach(el => {
		el.addEventListener('click', () => {

			// if (form.length <= pollBlocks.length - 1) {
			// 	form.push({
			// 		[`question_${step}`]: el.parentNode.parentNode.parentNode.children[0].innerHTML,
			// 		[`answer_${step}`]: el.innerHTML
			// 	});
			// }

			if (step <= 2) {
				showNextStep();
				step++;
				stepEl.innerHTML = step;
			}


		})
	});


	function showNextStep() {
		pollBlocks.forEach((el, i) => {
			if (i == step) {
				el.classList.add('active');
			} else {
				el.classList.remove('active');
			}
		});
	}
}

function initSwiper() {
	(function () {
		'use strict';

		const breakpoint = window.matchMedia('(min-width:768px)');

		let mySwiper;

		const breakpointChecker = function () {
			if (breakpoint.matches === true) {

				if (mySwiper !== undefined) mySwiper.destroy(true, true);
				return;

			} else if (breakpoint.matches === false) {
				return enableSwiper();
			}
		};


		const enableSwiper = function () {
			mySwiper = new Swiper(".swiper-gallery", {
				slidesPerView: 1,
				pagination: {
					el: ".swiper-pagination",
					clickable: true
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			});
		};

		breakpoint.addListener(breakpointChecker);

		breakpointChecker();

	})();
}




