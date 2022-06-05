<template>
	<button class="btn" @click="click">{{ title }}</button>
</template>

<script>
export default {
	name: "Button",
	props: {
		title: {
			type: String,
			require: true
		}
	},
	methods: {
		click() {
			this.$emit("click");
		}
	}
};
</script>

<style lang="scss" scoped>
.btn {
	padding: 0.8rem 2.8rem;
	font-weight: 500;
	font-size: 1.6rem;
	color: $white;
	background: $lochmara;
	border: solid 0.1rem $lochmara;

	&:hover {
		color: $lochmara;
		background: $white;
	}
}
</style>
