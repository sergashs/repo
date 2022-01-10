<template>
	<div class="header">
		<div class="container-fluid">
			<div class="inner-holder">
				<strong class="logo">
					<a href="#">Serhii D.</a>
				</strong>
				<nav>
					<ul class="main-menu">
						<li><router-link to="/">home</router-link></li>
						<li><a href="#">projects</a></li>
						<li><router-link to="/about">about</router-link></li>
						<li><a href="#">contact</a></li>
					</ul>
				</nav>
				<a class="open-menu d-block d-lg-none" href="#" :class="{ open: menuOpen }" @click.prevent="openMenu()">
					<span></span>
					<span></span>
					<span class="visually-hidden">Open Mobile Nav</span>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Header",
	props: {
		// msg: String
	},
	data: () => ({
		menuOpen: false
	}),
	methods: {
		openMenu() {
			this.menuOpen = !this.menuOpen;

			if (this.menuOpen) {
				document.body.classList.add("menu-opened");
			} else {
				document.body.classList.remove("menu-opened");
			}

			this.fadeInterval();
		},
		fadeInterval() {
			const menuLinks = document.querySelectorAll(".main-menu li");

			function animate() {
				menuLinks.forEach((element, i) => {
					if (document.body.classList.contains("menu-opened")) {
						setTimeout(function () {
							element.classList.add("animate-fade");
						}, i * 300);
					} else {
						setTimeout(function () {
							element.classList.remove("animate-fade");
						}, i * 100);
					}
				});
			}
			setTimeout(animate(), 2000);
		}
	}
};
</script>

<style lang="scss">
@import "@/components/Header/Header.scss";
</style>
