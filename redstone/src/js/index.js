
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
});


window.addEventListener('resize', () => {
	correctVh();
});


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

