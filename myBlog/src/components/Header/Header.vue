<template>
	<div class="header">
		<div class="container-fluid">
			<strong class="logo">
				<a href="#">architectural</a>
			</strong>
			<nav></nav>
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
// @import "@/components/Header/Header.scss";

.header {
	.logo {
		// font-family: $syncopate;
		font-weight: 700;
		letter-spacing: 0.04rem;
	}
}
</style>
