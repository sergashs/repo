function isElementInViewport(el, horK, vertK) {
	horK = horK || 0.75;
	vertK = vertK || 0.5;
	var rect = el.getBoundingClientRect();
	var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
	var windowWidth = (window.innerWidth || document.documentElement.clientWidth);
	var vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0) && ((rect.top + rect.height * vertK) <= windowHeight);
	var horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0) && ((rect.left + rect.width * horK) <= windowWidth);

	return (vertInView && horInView);
}

function isElementCoverSection(elem, section, offset) {
	offset = offset || 0;

	if (!elem || !section) {
		return false;
	}

	var elPos = elem.getBoundingClientRect();
	var secPos = section.getBoundingClientRect();

	return elPos.bottom + offset > secPos.top && elPos.bottom <= secPos.bottom - offset;
}


// $('html, body').stop().animate({
// 	scrollTop: offsetTop - offset
// }, duration)
// 	.promise()
// 	.done(function () {
// 		if (callback) {
// 			callback();
// 		}
// 		setTimeout(() => {
// 			var offsetTop = (isNumber(target)) ? target :
// 				(target === '#') ? 0 :
// 					($target.length) ? $target.offset().top : 0;
// 			$('html, body').stop().animate({
// 				scrollTop: offsetTop - offset
// 			}, duration);
// 		}, 600);
// 	});

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


function addMultiListener(element, eventNames, listener) {
	const events = eventNames.split(' ');
	for (let i = 0, iLen = events.length; i < iLen; i++) {
		element.addEventListener(events[i], listener, false);
	}
}

function checkWindowScroll() {
	const SCROLL_CLASS = 'scrolled';
	const bodyEl = document.querySelector('body');
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

	if (scrollTop > 10) {
		bodyEl.classList.add(SCROLL_CLASS);
	} else {
		bodyEl.classList.remove(SCROLL_CLASS);
	}
}

function showPass() {
	var showPassBtn = document.querySelectorAll('.show-pass');
	if (showPassBtn.length) {
		showPassBtn.forEach((el) => {
			el.addEventListener('click', (e) => {
				e.preventDefault();
				var input = el.parentElement.querySelector('input');
				var type = input.getAttribute('type');
				if (type == 'password') {
					var newType = 'text';
				} else {
					var newType = 'password';
				}
				input.setAttribute('type', newType);
			});
		});
	}
}

function countQuantityInput() {
	const inputWrapper = document.querySelectorAll(".input-quantity-wrapper");

	if (inputWrapper) {
		inputWrapper.forEach(item => {
			item.children[0].addEventListener('click', event => {
				event.preventDefault();
				let inputValue = item.children[1].value;
				inputValue > 0 ? inputValue-- : 0;
				item.children[1].value = inputValue;
			});

			item.children[2].addEventListener('click', event => {
				event.preventDefault();
				let inputValue = item.children[1].value;
				inputValue++;
				item.children[1].value = inputValue;
			});
		});
	}
}

function initLazyVideoBg() {
	const videos = Array.from(document.querySelectorAll('.lazy-video-bg'));

	if (videos.length) {
		videos.forEach(videEl => {
			for (var i = videEl.children.length - 1; i >= 0; i--) {
				videEl.children[i].src = videEl.children[i].dataset.src;
			}
			videEl.load();
			videEl.addEventListener('canplay', event => {
				event.target.classList.add('lazyloaded')
				event.target.play();
			});
		});
	}
}


function initHistoryTimeline() {
	var el = document.querySelectorAll('.history-timeline');

	Array.from(el).forEach(function (item) {
		var $timeline = item;
		var $progress = item.getElementsByClassName('timeline-progress')[0];

		setProgress($timeline, $progress);
		setActiveDate();

		window.addEventListener('scroll', function (e) {
			setProgress($timeline, $progress);
			setActiveDate();
		});
	});


	function setProgress($timeline, $progress) {
		var winH = window.innerHeight,
			winScroll = window.scrollY,
			offset = $timeline.getBoundingClientRect().top + window.scrollY,
			height = $timeline.offsetHeight,
			pos = 0;

		pos = winScroll - offset + winH / 2;
		pos = (pos < 0) ? 0 : (pos > height) ? height : pos;

		$progress.style.height = pos + 'px';
	}

	function setActiveDate() {
		var el = document.querySelectorAll('.history-section .date-label');

		Array.from(el).forEach(function (item) {
			var $label = item;
			var winH = window.innerHeight;
			var winScroll = window.scrollY;
			var offset = $label.getBoundingClientRect().top + window.scrollY;
			var pos = winScroll + winH / 2;

			if (offset <= pos) {
				$label.classList.add('active');
			} else {
				$label.classList.remove('active');
			}
		});
	}
}


function dragtoScrollInspiration() {
	const ele = document.querySelector(".inspiration-inner");

	if (ele) {
		ele.style.cursor = 'grab';

		let pos = { top: 0, left: 0, x: 0, y: 0 };

		const mouseDownHandler = function (e) {
			ele.style.cursor = 'grabbing';
			ele.style.userSelect = 'none';

			pos = {
				left: ele.scrollLeft,
				top: ele.scrollTop,
				// Get the current mouse position
				x: e.clientX,
				y: e.clientY,
			};

			document.addEventListener('mousemove', mouseMoveHandler);
			document.addEventListener('mouseup', mouseUpHandler);
		};

		const mouseMoveHandler = function (e) {
			// How far the mouse has been moved
			const dx = e.clientX - pos.x;
			const dy = e.clientY - pos.y;

			// Scroll the element
			ele.scrollTop = pos.top - dy;
			ele.scrollLeft = pos.left - dx;
		};

		const mouseUpHandler = function () {
			ele.style.cursor = 'grab';
			ele.style.removeProperty('user-select');

			document.removeEventListener('mousemove', mouseMoveHandler);
			document.removeEventListener('mouseup', mouseUpHandler);
		};

		// Attach the handler
		ele.addEventListener('mousedown', mouseDownHandler);
	}
}


function isInViewport(el, offset) {
	offset = offset || 0;
	const rect = el.getBoundingClientRect();

	return (
		(
			rect.top >= offset &&
			rect.top < window.innerHeight
		) ||
		(
			rect.bottom >= offset &&
			rect.bottom < window.innerHeight
		) ||
		(
			rect.top < offset &&
			rect.bottom > offset
		)
	);
}


let screenRes_ = {
	isDesktop: true,
	isTablet: false,
	isMobile: false
};


function checkScreenSize() {
	let winWidth = window.innerWidth;

	screenRes_.isDesktop = (winWidth > 1024);
	screenRes_.isMobile = (winWidth < 768);
	screenRes_.isTablet = (!screenRes_.isMobile && (winWidth < 992));
}


function elementInViewport(el) {
	var top = el.offsetTop;
	var left = el.offsetLeft;
	var width = el.offsetWidth;
	var height = el.offsetHeight;

	while (el.offsetParent) {
		el = el.offsetParent;
		top += el.offsetTop;
		left += el.offsetLeft;
	}

	return (
		top < (window.pageYOffset + 77) &&
		left < (window.pageXOffset + window.innerWidth) &&
		(top + height) > window.pageYOffset &&
		(left + width) > window.pageXOffset
	);
}


function videoOnHover() {
	var el = document.querySelectorAll('.project-item');

	Array.from(el).forEach(function (item) {
		var video = item.getElementsByTagName('video')[0];

		if (video) {
			var playPromise = video.pause();

			if (playPromise !== undefined) {
				playPromise.then(_ => {
					video.pause();
				});
			}
			item.addEventListener('mouseenter', (e) => {
				video.play();
			});
			item.addEventListener('mouseleave', (e) => {
				video.pause();
			});
		}
	});
}

window.addEventListener('scroll', function () {
	document.documentElement.scrollTop > 0 ? document.documentElement.classList.add('scrolled') : document.documentElement.classList.remove('scrolled');
});