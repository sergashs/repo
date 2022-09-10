<template>
	<header class="header">
		<div class="container">
			<strong>logo</strong>
			<nav>
				<ul>
					<li><nuxt-link to="/">Home</nuxt-link></li>
					<li><nuxt-link to="/posts">Posts</nuxt-link></li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<style lang="scss" scoped>
.header {
	padding-top: 3rem;
	padding-bottom: 3rem;

	.container {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	nav {
		ul {
			display: flex;
			margin: 0;
			padding: 0;
			list-style: none;

			li {
				margin-left: 3rem;
			}
		}
	}
}
</style>
