let loadLazyLoadScript = false;

document.addEventListener('DOMContentLoaded', () => {
	loadFonts();
	correctVh();
	lazyLoad();
	sendRequest();
});

window.addEventListener('resize', () => {
	correctVh();
});

// load fonts
function loadFonts() {
	WebFont.load({
		custom: {
			// families: ['Hanken Grotesk:200,300,400,500'],
			// urls: ['css/fonts.css']
		},
		google: {
			families: ['Hanken Grotesk:200,300,400,500'],
		}
	});
}

// lazyLoad Images
function lazyLoad() {
	if ('loading' in HTMLImageElement.prototype) {
		const images = document.querySelectorAll('img.lazyload');
		images.forEach(function (img) {
			img.src = img.dataset.src;
			img.onload = function () {
				img.classList.add('lazyloaded');
			};
			if (img.classList.contains('svg-html')) {
				replaseInlineSvg(img);
			}
			if (img.classList.contains('lazyload-bg')) {
				img.style.display = "none";
				img.parentNode.style.backgroundImage = "url(" + img.dataset.src + ")";
			}
		});
	} else {
		if (!loadLazyLoadScript) {
			loadLazyLoadScript = true;
			const script = document.createElement("script");
			script.async = true;
			script.src = 'js/lazysizes.min.js';
			document.body.appendChild(script);
		}
		document.addEventListener('lazyloaded', function (e) {
			const img = e.target;
			if (img.classList.contains('lazyload-bg')) {
				img.style.display = 'none';
				img.parentNode.style.backgroundImage = 'url(' + img.dataset.src + ')';
			}
			if (img.classList.contains('svg-html')) {
				replaseInlineSvg(img);
			}
		});
	}
}

// replaseInlineSvg
function replaseInlineSvg(el) {
	const imgID = el.getAttribute('id');
	const imgClass = el.getAttribute('class');
	const imgURL = el.getAttribute('src');

	fetch(imgURL)
		.then(data => data.text())
		.then(response => {
			const parser = new DOMParser();
			const xmlDoc = parser.parseFromString(response, 'text/html');
			const svg = xmlDoc.querySelector('svg');

			if (typeof imgID !== 'undefined') {
				svg.setAttribute('id', imgID);
			}

			if (typeof imgClass !== 'undefined') {
				svg.setAttribute('class', imgClass + ' replaced-svg');
			}

			svg.removeAttribute('xmlns:a');

			el.parentNode.replaceChild(svg, el);
		});
}

// correctVh
function correctVh() {
	const vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', vh + 'px');
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


function sendRequest() {
	const btn = document.querySelector('#send-request');
	const dataFromDOM = {
		username: document.querySelector("#inputName"),
		phone: document.querySelector("#inputPhone"),
		message: document.querySelector("#inputTextarea")
	}

	let formData = {
		key: "FbVtnSix9T",
		username: dataFromDOM.message.value,
		phone: dataFromDOM.phone.value,
		message: dataFromDOM.message.value,
		page: "page1",
		region: "region",
		ip: "192.158.1.38."
	}


	btn.addEventListener('click', () => {
		formData.username = dataFromDOM.message.value;
		formData.phone = dataFromDOM.phone.value;
		formData.message = dataFromDOM.message.value;

		console.log(formData)


		fetch("https://leadpushka.ru/api/lead", {
			method: "POST",
			headers: { "content-type": "application/x-www-form-urlencoded" },
			body: JSON.stringify(formData)

		}).then((response) => {
			console.log(response);
		}).catch((response) => {
			console.log(response);
		})
	})

}

// jQuery
(function ($) {
	'use strict';

	$(document).ready(function () {
	}); // ready

	$(window).on('resize', function () {
	}); // resize

	$(window).on('load', function () {
	}); // load

	// functions
})(this.jQuery);