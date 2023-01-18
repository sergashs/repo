<template>
	<header class="header">
		<div class="container">
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
		<Button label="plus" @click="counter++" />
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
		title: "About",
		url: "/about"
	}
]);
</script>

<style lang="scss" scoped>
.header {
	.menu {
		display: flex;

		.menu-item {
			&:not(:last-child) {
				margin-right: 20px;
			}
		}
	}
}
</style>
