<template>
	<ul class="accordion">
		<slot></slot>
	</ul>
</template>

<script>
export default {
	title: "Accordion",
	provide() {
		return { Accordion: this.Accordion };
	},
	data() {
		return {
			Accordion: {
				count: 0,
				active: 0
			}
		};
	}
};
</script>

<style lang="scss" scoped>
.accordion {
	list-style: none;
	margin: 0;
	padding: 0;

	.accordion-item {
		&:last-child {
			border-bottom: solid 0.1rem;
		}
	}
}
</style>
