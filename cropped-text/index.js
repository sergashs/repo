document.addEventListener('DOMContentLoaded', () => {
	CropedTextOnMobile();
});



function CropedTextOnMobile() {
	var cropedBlocks = document.querySelectorAll(".cropped-block");
	var croppedWrappers = document.querySelectorAll(".cropped-wrapper");
	var maxHeight = 300;


	function setMaxHeight() {
		for (item of croppedWrappers) {
			if (item.querySelector(".cropped-block").scrollHeight < maxHeight || item.querySelector(".cropped-block").scrollHeight == maxHeight) {
				item.querySelector('.load-more').style.display = "none";
				item.querySelector(".cropped-block").style.maxHeight = item.querySelector(".cropped-block").scrollHeight + 'px';
			} else {
				item.querySelector('.cropped-block').style.maxHeight = maxHeight + 'px';
				item.querySelector('.load-more').style.display = 'block';
			}
		}
	}


	setMaxHeight();


	window.addEventListener("resize", function () {
		// if (window.innerWidth < 768) {
		setMaxHeight();
		// }
	});


	croppedWrappers.forEach(function (item) {
		item.querySelector(".read-more-link").addEventListener("click", function (e) {
			e.preventDefault();
			const cropedTextBlock = item.querySelector(".cropped-block");
			const offsetTop = item.offsetTop;
			cropedTextBlock.classList.toggle("cropped");





			if (cropedTextBlock.classList.contains('cropped')) {
				cropedTextBlock.style.maxHeight = cropedTextBlock.scrollHeight + "px";
				item.querySelector(".read-more-link").innerHTML = "Read less";
				console.log(offsetTop)
				console.log(cropedTextBlock.scrollHeight)
				scroll({
					top: offsetTop,
					behavior: "smooth"
				});
			} else {
				cropedTextBlock.style.maxHeight = maxHeight + 'px';
				item.querySelector(".read-more-link").innerHTML = "Read more";
			}

		});





	});



	// if (window.innerWidth < 768) {
}