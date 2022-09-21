<template>
	<div class="wrapper">
		<main class="main">
			<div class="home">
				<SearchField />
			</div>
		</main>
	</div>
</template>

<script>
import SearchField from "@/components/SearchField";

export default {
	components: {
		SearchField
	},
	mounted() {
		console.log("%cHello world :D", "color:red;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold");
	}
};
</script>

<style lang="scss" scoped>
.home {
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;

	.search-holder {
		max-width: 40rem;
		width: 100%;
	}
}
</style>
