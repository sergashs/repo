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
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
}
</style>
