



// export default ({ app }, inject) => {
// 	inject('LocomotiveScroll', LocomotiveScroll)
// }




export default ({ app }, inject) => {


	function correctVh() {
		const vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty("--vh", vh + "px");
	}

	correctVh();

	// inject('test', () => {
	// 	console.log(`test`)
	// })
}