<template>
	<div class="layout">
		<Header />
		<slot />
	</div>
</template>

<script>
import Header from "@/components/layout/Header";

export default {
	components: {
		Header
	}
};
</script>

<style lang="scss" scoped>
.layout {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}
</style>
