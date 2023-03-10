<template>
	<header class="header">
		<div class="container">
			<nuxt-link to="/" class="logo">LOGO</nuxt-link>
			<nav class="nav">
				<ul class="menu">
					<li v-for="(link, index) in menu" :key="index" class="menu-item">
						<nuxt-link :to="link.url">
							{{ link.title }}
						</nuxt-link>
					</li>
				</ul>
			</nav>
		</div>
		<!-- <Button label="plus" @click="counter++" /> -->
	</header>
</template>

<script setup>
const menu = ref([
	{
		title: "Home",
		url: "/"
	},
	{
		title: "Posts",
		url: "/posts"
	},
	{
		title: "Add Post",
		url: "/posts/create"
	}
]);
</script>

<style lang="scss" scoped>
.header {
	padding: 20px 0;

	.container {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.logo {
		font-weight: 600;
		font-size: 20px;
		text-transform: uppercase;
	}

	.menu {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;

		.menu-item {
			&:not(:last-child) {
				margin-right: 20px;
			}
		}
	}

	a {
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
}
</style>
