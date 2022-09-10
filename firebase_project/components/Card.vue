<template>
	<div class="card">
		<!-- <img src="..." class="card-img-top" alt="..." /> -->
		<div class="img-holder" v-if="data.img_url">
			<img :src="data.img_url" :alt="data.title" />
		</div>
		<div class="card-body">
			<h5 class="card-title">{{ data.title }}</h5>
			<p class="card-text">{{ data.description.slice(0, 150) + "..." }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		data: {
			type: Object,
			default: () => ({})
		}
	}
};
</script>

<style lang="scss" scoped>
.card {
	height: 100%;
	padding: 2rem;
	border: solid 0.1rem rgba(black, 0.1);

	.img-holder {
		margin-bottom: 1rem;

		img {
			width: 100%;
			height: auto;
		}
	}
}
</style>
