<template>
	<header class="header">
		<div class="container">
			<nuxt-link to="/">Logo</nuxt-link>

			<nav class="main-nav">
				<ul class="main-menu">
					<li v-for="(item, index) in menu" :key="index">
						<nuxt-link :to="item.to">{{ item.title }}</nuxt-link>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<script>
export default {
	name: "Header",
	data() {
		return {
			menu: [
				{
					title: "home",
					to: "/"
				},
				{
					title: "contact",
					to: "/contact"
				}
			]
		};
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

	.main-nav {
		.main-menu {
			display: flex;
			margin: 0;
			padding: 0;
			list-style: none;

			li {
				&:not(:last-child) {
					margin-right: 2rem;
				}
			}
		}
	}
}
</style>
