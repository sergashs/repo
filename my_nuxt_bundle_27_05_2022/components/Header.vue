<template>
	<header class="header">
		<div class="container">
			<strong class="logo">
				<nuxt-link to="/">Logo</nuxt-link>
			</strong>

			<nav class="main-nav">
				<ul class="main-menu">
					<li v-for="(item, index) in menu" :key="index">
						<nuxt-link :to="item.to">{{ item.title }}</nuxt-link>
					</li>
				</ul>
			</nav>
			<a class="open-menu d-lg-none" :class="{ open: menuOpen }" href="#" @click.prevent="toggleMenu">
				<span></span>
				<span></span>
				<span class="visually-hidden">Open Mobile Nav</span>
			</a>
		</div>
	</header>
</template>

<script>
export default {
	name: "Header",
	data() {
		return {
			menuOpen: false,
			menu: [
				{
					title: "home",
					to: "/"
				},
				{
					title: "contact",
					to: "/contact"
				},
				{
					title: "accordion",
					to: "/accordion"
				},
				{
					title: "breakpoints",
					to: "/breakpoints"
				},
				{
					title: "modals",
					to: "/modals"
				}
			]
		};
	},
	methods: {
		toggleMenu() {
			this.menuOpen = !this.menuOpen;

			if (this.menuOpen) {
				document.body.classList.add("menu-opened");
			} else {
				document.body.classList.remove("menu-opened");
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.header {
	padding-top: 3rem;
	padding-bottom: 3rem;

	> .container {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.logo {
		position: relative;
		z-index: 100;
	}

	.main-nav {
		transition: $transition;

		@include media-breakpoint-down(lg) {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			display: flex;
			padding: 8rem 3rem;
			background: rgba($black, 0.2);
			opacity: 0;
			visibility: hidden;
			pointer-events: none;
			z-index: 99;
		}

		.menu-opened & {
			@include media-breakpoint-down(lg) {
				opacity: 1;
				visibility: visible;
				pointer-events: all;
			}
		}

		.main-menu {
			margin: 0;
			padding: 0;
			list-style: none;

			@include media-breakpoint-down(lg) {
				width: 100%;
				overflow: auto;
			}

			@include media-breakpoint-up(lg) {
				display: flex;
			}

			li {
				&:not(:last-child) {
					margin-right: 2rem;
				}
			}
		}
	}

	.open-menu {
		position: relative;
		width: 3rem;
		height: 3rem;
		display: block;
		font-size: 0;
		line-height: 0;
		z-index: 100;

		span {
			position: absolute;
			top: 50%;
			left: 0;
			width: 100%;
			border-bottom: 0.3rem solid;
			height: 0;
			transition: $transition;

			// .menu-opened & {
			// 	@include media-breakpoint-down(lg) {
			// 		color: $white;
			// 	}
			// }

			&:nth-child(1) {
				margin-top: -0.5rem;

				.menu-opened & {
					margin-top: 0;
					transform: rotate(45deg);
				}
			}

			&:nth-child(2) {
				margin-top: 0.5rem;

				.menu-opened & {
					margin-top: 0;
					transform: rotate(-45deg);
				}
			}
		}
	}
}
</style>
