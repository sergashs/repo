
import '../styles/index.scss';
import { gsap } from "gsap";
import { ScrollTrigger, } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const isTouchScreen = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i);

document.addEventListener('DOMContentLoaded', () => {
	correctVh();
	gsapReviewCursors();
	scrollSection();
	fullscreenMenu();
	headerScroll();
	getModal();
	homeGsapAnimations();
});

window.addEventListener('resize', () => {
	correctVh();
	gsapReviewCursors();
});

function homeGsapAnimations() {
	const tlIntroSection = gsap.timeline();

	if (window.innerWidth > 1200) {
		tlIntroSection.fromTo(document.querySelector('.section-intro .section-title'), { opacity: 0, y: -20 }, { opacity: 1, y: 0, autoAlpha: 1 });
		tlIntroSection.fromTo(document.querySelector('.section-intro .btn-outline-primary'), { opacity: 0, y: -20 }, { opacity: 1, y: 0, autoAlpha: 1 });
		tlIntroSection.fromTo(document.querySelector('.section-intro .list-logos'), { opacity: 0, y: -20 }, { opacity: 1, y: 0, autoAlpha: 1 });
		tlIntroSection.fromTo(document.querySelector('.section-intro .count-block'), { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, autoAlpha: 1 });
	} else {
		tlIntroSection.fromTo(document.querySelector('.section-intro .count-block'), { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, autoAlpha: 1 });
		tlIntroSection.fromTo(document.querySelector('.section-intro .section-title'), { opacity: 0, y: -20 }, { opacity: 1, y: 0, autoAlpha: 1 });
		tlIntroSection.fromTo(document.querySelector('.section-intro .btn-outline-primary'), { opacity: 0, y: -20 }, { opacity: 1, y: 0, autoAlpha: 1 });
		tlIntroSection.fromTo(document.querySelector('.section-intro .list-logos'), { opacity: 0, y: -20 }, { opacity: 1, y: 0, autoAlpha: 1 });

	}

	gsap.fromTo(document.querySelectorAll('.animation-appear-y'), { opacity: 0, y: -20 }, {
		opacity: 1, y: 0, autoAlpha: 1, stagger: 0.25, scrollTrigger: {
			trigger: document.querySelectorAll(".animation-appear-y"),
			start: 'top 75%',
		},
	});
}

function getModal() {
	const btns = document.querySelectorAll('.open-popup');

	if (btns && btns.length > 0) {
		btns.forEach(btn => {
			btn.addEventListener('click', () => {
				const xhr = new XMLHttpRequest();

				xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);

				xhr.onload = function () {
					if (xhr.status == 200) {
						document.getElementById("modalContainer").innerHTML = `<div class="modal"><div class="container">${xhr.responseText}</div></div>`;
					} else {
						console.error("Помилка Ajax-запиту: " + xhr.status);
					}
				};

				xhr.onerror = function () {
					console.error("Помилка Ajax-запиту");
				};

				xhr.send();
			})
		})
	}
}


function headerScroll() {
	const header = document.querySelector('.header');

	window.addEventListener('scroll', function () {
		if (window.scrollY > 0) {
			header.classList.add('scrolled');
		} else {
			header.classList.remove('scrolled');
		}
	});
}


function fullscreenMenu() {
	const btnsDropdown = document.querySelectorAll('.menu-fullscreen .has-submenu .has-submenu-link');
	const btnsCLose = document.querySelectorAll('.menu-fullscreen .has-submenu .sub-menu-close');
	const btnsOpenMenu = document.querySelectorAll('.btn-menu-toggle');

	if (btnsDropdown) {
		function clearClass() {
			btnsDropdown.forEach(btn => {
				btn.parentNode.classList.remove('active');
			});
		}

		if (btnsDropdown) {
			btnsDropdown.forEach(btn => {
				btn.addEventListener('click', () => {
					if (btn.parentNode.classList.contains('active')) {
						clearClass();
					} else {
						clearClass();
						btn.parentNode.classList.add('active');
					}
				})
			})

			btnsCLose.forEach(btn => {
				btn.addEventListener('click', () => {
					clearClass();
				})
			})
		}
	}

	const tl = gsap.timeline({ paused: true });

	tl.to('.menu-fullscreen', { y: 0 });
	if (window.innerWidth > 992) {
		tl.fromTo(document.querySelectorAll('.menu-animate-block'), { opacity: 0, height: 0 }, { opacity: 1, height: '50vh', stagger: 0.15 });
	} else {
		tl.fromTo(document.querySelectorAll('.menu-animate-block'), { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.15 });
	}
	tl.fromTo(document.querySelectorAll('.menu-fullscreen-primary'), { opacity: 0, }, { opacity: 1, stagger: 0.15 })
	tl.fromTo('.menu-social', { opacity: 0 }, { opacity: 1 })


	tl.eventCallback('onReverseComplete', () => {
		document.body.classList.remove('menu-opened');
		document.querySelector('.header .logo-holder img').setAttribute('src', 'images/logo.svg');
	});

	tl.reverse();



	btnsOpenMenu.forEach(btn => {
		btn.addEventListener('click', () => {
			if (document.body.classList.contains('menu-opened')) {
				tl.reverse();
			} else {
				tl.reversed(!tl.reversed());
				document.querySelector('.header .logo-holder img').setAttribute('src', 'images/logo_white.svg');
				document.body.classList.add('menu-opened');
			}
		})
	})

}




// correctVh
function correctVh() {
	const vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', vh + 'px');
}

function gsapReviewCursors() {
	const blocks = document.querySelectorAll('.section-categories .review-overlay');

	if (window.innerWidth > 1200 && !isTouchScreen && blocks && blocks.length > 0) {
		blocks.forEach(block => {
			block.addEventListener('mousemove', (e) => {
				const rect = block.getBoundingClientRect();
				const offsetX = e.clientX - rect.left;
				const offsetY = e.clientY - rect.top;
				gsap.to(block.querySelector('.review-icon'), {
					x: offsetX - block.clientWidth / 2,
					y: offsetY - block.clientHeight / 2,
					duration: 1.25,
				})
			});

			block.addEventListener('mouseleave', function () {
				var icon = this.querySelector('.review-icon');
				gsap.to(icon, { x: 0, y: 0, duration: 1.25, });
			});
		});
	}
}


function scrollSection() {
	const btns = document.querySelectorAll('.scroll-section');

	if (btns && btns.length > 0) {
		btns.forEach(btn => {
			btn.addEventListener('click', () => {
				gsap.to(window, {
					duration: 0,
					scrollTo: {
						y: btn.parentNode.parentNode.scrollHeight,
					},
				});
			})
		})
	}
}