<template>
	<header class="header">
		<nav>
			<ul>
				<li v-for="(item, index) in menu" :key="index">
					<router-link :to="item.to">{{ item.title }}</router-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
export default {
	data() {
		return {
			menu: [
				{
					title: "Home",
					to: "/"
				},
				{
					title: "Map",
					to: "/map"
				}
			]
		};
	}
};
</script>

<style lang="scss" scoped>
.header {
	padding: 20px;

	ul {
		margin: 0;
		padding: 0;
		list-style: none;
		display: flex;
		justify-content: center;

		li {
			&:not(:last-child) {
				margin-right: 20px;
			}
		}

		a {
			&.router-link-active {
				color: black;
			}
		}
	}
}
</style>
