let loadLazyLoadScript = false;

document.addEventListener('DOMContentLoaded', () => {
	loadFonts();
	correctVh();

});

window.addEventListener('resize', () => {
	correctVh();
});

// load fonts
function loadFonts() {
	WebFont.load({
		google: {
			families: ['Noto Sans:n4,n7']
		}
	});
}

// correctVh
function correctVh() {
	const vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', vh + 'px');
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