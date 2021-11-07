let loadLazyLoadScript = false;

document.addEventListener('DOMContentLoaded', () => {
	loadFonts();
	lazyLoad();
	openImgDescriptionBlock();
	mobileMenu();
	headerMenuDropdownsMobile();
});


// load fonts
function loadFonts() {
	WebFont.load({
		google: {
			families: ['Open Sans:n4']
		}
	});
}

// lazyLoad Images
function lazyLoad() {
	if ('loading' in HTMLImageElement.prototype) {
		var images = document.querySelectorAll('img.lazyload');
		images.forEach(function (img) {
			img.src = img.dataset.src;
			img.onload = function () {
				img.classList.add('lazyloaded');
			};
		});
	} else {
		if (!loadLazyLoadScript) {
			loadLazyLoadScript = true;
			var script = document.createElement("script");
			script.async = true;
			script.src = '/js/lazysizes.min.js';
			document.body.appendChild(script);
		}
	}
}

function openImgDescriptionBlock() {
	const btn = document.querySelector('.btn');
	const block = document.querySelector('.img-holder');

	btn.addEventListener('click', function (event) {
		event.preventDefault();
		block.classList.toggle('show')
	})
}

function mobileMenu() {
	const openBtn = document.querySelectorAll('.open-close-menu');

	openBtn.forEach(function (btn) {
		btn.addEventListener("click", function (e) {
			e.preventDefault();
			if (document.body.classList.contains('mobile-menu-opened')) {
				document.body.classList.remove('mobile-menu-opened');
			} else {
				document.body.classList.add('mobile-menu-opened');
			}
		});
	});
};

function headerMenuDropdownsMobile() {
	const dropdowns = document.querySelectorAll('.has-dropdown');
	const subDropdowns = document.querySelectorAll('.has-sub-dropdown');

	dropdowns.forEach(function (item) {
		item.children[1].addEventListener("click", function (e) {
			e.preventDefault();

			item.classList.toggle('open');
		});
	});

	subDropdowns.forEach(function (item) {
		item.children[1].addEventListener("click", function (e) {
			e.preventDefault();
			item.classList.toggle('open');

			if (item.classList.contains("open")) {
				item.children[2].style.maxHeight = item.children[2].scrollHeight + 40 + "px";
			} else {
				item.children[2].style.maxHeight = null;
			}
		});
	});


}