
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper';
// import { Navigation } from 'swiper/modules';


import '../styles/index.scss';

document.addEventListener('DOMContentLoaded', () => {
	// initAccordions();
	// siteMenu();
	initSwiper();
});

window.addEventListener('resize', () => {
});


function siteMenu() {
	const btn = document.querySelector('.open-menu');

	btn.addEventListener('click', () => {
		if (document.body.classList.contains('menu-opened')) {
			document.body.classList.remove('menu-opened');
		} else {
			document.body.classList.add('menu-opened');
		}
	});


	function dropdownToAccordion() {
		const dropdowns = document.querySelectorAll('.main-menu .has-dropdown .link');

		function dropdownClickHandler(event, dropdown) {
			let targetElement = event.target;

			while (targetElement && !targetElement.matches('.link')) {
				targetElement = targetElement.parentElement;
			}

			if (targetElement) {
				event.preventDefault();
				const dropdown = targetElement;
				dropdown.parentElement.classList.toggle('open');

				if (dropdown.parentElement.classList.contains('open')) {
					targetElement.parentElement.querySelector('.dropdown').style.maxHeight = `${targetElement.parentElement.querySelector('.dropdown').scrollHeight}px`;
				} else {
					targetElement.parentElement.querySelector('.dropdown').style.maxHeight = `0px`;
				}

			}
		};

		function addEventListeners() {
			dropdowns.forEach(dropdown => {
				dropdown.addEventListener('click', dropdownClickHandler);
			});
		}

		function removeEventListeners() {
			dropdowns.forEach(dropdown => {
				dropdown.removeEventListener('click', dropdownClickHandler);
			});
		}

		function handleResize() {
			if (window.innerWidth < 1280) {
				addEventListeners();
			} else {
				removeEventListeners();
			}
		}

		handleResize();

		window.addEventListener('resize', handleResize);
	}

	dropdownToAccordion();
}

function initAccordions() {
	const accordions = document.querySelectorAll(".accordion-item");
	const accordionsDescription = document.querySelectorAll(".accordion-collapse");

	if (accordions) {
		function heightDelete(arrayOfItems) {
			arrayOfItems.forEach(item => {
				item.style.maxHeight = null;
			});
		}

		function deleteClass(arrayOfItems, clasName) {
			arrayOfItems.forEach(item => {
				item.classList.remove(clasName);
			});
		}

		accordions.forEach(function (item) {
			item.children[0].addEventListener("click", function (e) {
				e.preventDefault();

				const itemParent = this.parentElement;

				if (itemParent.classList.contains('open')) {
					itemParent.classList.remove("open");
					itemParent.children[1].style.maxHeight = null;
				} else {
					deleteClass(accordions, "open");
					itemParent.classList.add("open");
					heightDelete(accordionsDescription);
					itemParent.children[1].style.maxHeight = itemParent.children[1].scrollHeight + "px";
				}
			});

			if (item.classList.contains("open")) {
				item.children[1].style.maxHeight = item.children[1].scrollHeight + "px";
			}
		});

	}

}

function initSwiper() {
	const swiper = new Swiper('.swiper', {
		slidesPerView: 'auto',
		spaceBetween: 20,
		// navigation: {
		// 	nextEl: '.swiper-button-next',
		// 	prevEl: '.swiper-button-prev',
		// },
		centerInsufficientSlides: true,
		breakpoints: {
			768: {
				slidesPerView: 'auto',
				spaceBetween: 16,
			},
			992: {
				slidesPerView: 'auto',
			},
		},
		// modules: [Navigation],
	});


}