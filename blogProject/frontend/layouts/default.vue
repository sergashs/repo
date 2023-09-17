<template>
	<div class="layout">
		<Header />
		<NuxtPage />
	</div>
</template>

<script setup>
import Header from "@/components/layout/Header";
import { onMounted, onBeforeMount } from "vue";
import { useStore, mapGetters, mapActions } from "vuex";

const store = useStore();
const getUser = () => store.dispatch("user/getUser");

onMounted(() => {
	if (localStorage.getItem("token")) {
		getUser();
	}
});
</script>

<style lang="scss" scoped>
.layout {
	display: flex;
	flex-direction: column;
}
</style>
