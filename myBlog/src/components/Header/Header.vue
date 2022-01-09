<template>
	<div class="header">
		<div class="container-fluid">
			<div class="inner-holder">
				<strong class="logo">
					<a href="#">architectural</a>
				</strong>
				<nav>
					<ul>
						<li><router-link to="/">home</router-link></li>
						<li><a href="#">projects</a></li>
						<li><router-link to="/about">about</router-link></li>
						<li><a href="#">contact</a></li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Header",
	props: {
		// msg: String
	}
};
</script>

<style lang="scss">
@import "@/components/Header/Header.scss";
</style>
