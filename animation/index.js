function lightBulbs() {
	const bulbs = document.querySelectorAll('.bulb');

	function addAnimation() {
		for (var i = 0; i < bulbs.length; i++) {
			if (i % 2 !== 0) {
				bulbs[i].classList.toggle('light');
			}
		}
	}

	function addAnimation2() {
		for (var i = 0; i < bulbs.length; i++) {
			if (i % 2 == 0) {
				bulbs[i].classList.toggle('light');
			}
		}
	}



	setTimeout(addAnimation, 1000);
	setTimeout(addAnimation2, 3000);
}

lightBulbs();