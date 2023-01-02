<template>
	<button class="btn"><slot /></button>
</template>

<style lang="scss" scoped>
.btn {
	padding: 1.5rem 2rem;
	font-weight: 500;
	font-size: 1.8rem;
	border-radius: 40px;
	border: none;

	&-success {
		color: #ffffff;
		background: #69c522;

		&:hover {
			background: darken(#69c522, 5);
		}
	}
}
</style>
