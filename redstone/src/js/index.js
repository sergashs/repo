
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
});


window.addEventListener('resize', () => {
	correctVh();
	gsapReviewCursors();
});


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

	tl.to('.menu-fullscreen', { y: 0 })
		.fromTo(document.querySelectorAll('.menu-animate-block'), { opacity: 0, height: 0 }, { opacity: 1, height: window.innerWidth > 992 ? '50vh' : '100%', stagger: 0.15 })
		.fromTo(document.querySelectorAll('.menu-fullscreen-primary'), { opacity: 0, }, { opacity: 1, stagger: 0.15 })
		.fromTo('.menu-social', { opacity: 0 }, { opacity: 1 })


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
						// autoKill: false, 
					},

				});
			})
		})
	}
}