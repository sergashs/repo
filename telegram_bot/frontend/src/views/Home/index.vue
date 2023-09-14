<template>
	<div class="home-page">
		<Chat />
	</div>
</template>

<script>
import Chat from "@/components/Chat";

export default {
	data() {
		return {};
	},
	components: {
		Chat
	},

	created() {},

	methods: {},
	computed: {}
};
</script>

<style lang="scss" scoped>
.home-page {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	min-height: 100vh;
	min-height: calc(var(--vh, 1vh) * 100);
}
</style>
