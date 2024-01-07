
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

});


function fullscreenMenu() {
	const btnsDropdown = document.querySelectorAll('.menu-fullscreen .has-submenu .has-submenu-link');
	const btnsCLose = document.querySelectorAll('.menu-fullscreen .has-submenu .sub-menu-close');
	const btnOpenMenu = document.querySelector('.btn-menu-toggle');

	if (btnsDropdown) {
		btnsDropdown.forEach(btn => {
			btn.addEventListener('click', () => {
				clearClass();
				btn.parentNode.classList.add('active');
			})
		})


		btnsCLose.forEach(btn => {
			btn.addEventListener('click', () => {
				clearClass();
			})
		})


		const tl = gsap.timeline({});


		btnOpenMenu.addEventListener('click', () => {
			if (document.body.classList.contains('menu-opened')) {
				tl.to('.menu-fullscreen', { y: '-100%' });
				document.body.classList.remove('menu-opened')
			} else {
				tl.to('.menu-fullscreen', { y: 0 });
				document.body.classList.add('menu-opened')
			}
		})
	}

	function clearClass() {
		btnsDropdown.forEach(btn => {
			btn.parentNode.classList.remove('active');
		})
	}
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