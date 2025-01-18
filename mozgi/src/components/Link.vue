<template>
	<router-link :to="link.to" class="link">{{ link.title }}</router-link>
</template>

<script>
export default {
	props: {
		link: {
			type: Object,
			default: () => ({})
		}
	}
};
</script>

<style lang="scss" scoped>
.link {
	position: relative;
	display: inline-block;
	font-weight: 600;
	font-size: 16px;
	color: #373737;
	text-decoration: none;
	transition: 0.3s linear;

	&::after {
		content: "";
		left: 0;
		bottom: -3px;
		display: block;
		width: 0%;
		height: 0;
		border-bottom: 0.2rem solid;
		transition: width 0.3s linear;
	}

	&:hover {
		color: white;

		&::after {
			width: 100%;
		}
	}
}
</style>
