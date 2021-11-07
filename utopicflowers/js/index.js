$(".carousel").swipe({
	swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
		if (direction == "left") $(this).carousel("next");
		if (direction == "right") $(this).carousel("prev");
	},
	allowPageScroll: "vertical",
});

const button = document.querySelector(".header__burger");
const menu = document.querySelector(".navbar-nav");
button.onclick = function () {
	button.classList.toggle("active");
	menu.classList.toggle("open");
};