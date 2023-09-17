<template>
	<div class="layout">
		<Header />
		<NuxtPage />
	</div>
</template>

<script setup>
import Header from "@/components/layout/Header";
// import { onMounted, onBeforeMount } from "vue";
import { useStore, mapGetters, mapActions } from "vuex";
import ApiUsers from "@/api/users";
import { ref } from "vue";

const store = useStore();
const getUser = () => store.dispatch("user/getUser");
let user = ref("1");

onMounted(async () => {
	if (localStorage.getItem("token")) {
		// getUser();
		await getUser();
	}
});

async function getSelfUser() {
	await ApiUsers.getSelfUser()
		.then((response) => {
			if (response.username) {
				console.log(response);
				user.value = response;
				return response;
			}
		})
		.catch((error) => {
			console.log(error);
			return error;
		});
}

// const { pending, data: todos } = useFetch("http://localhost:5000/api/users", {
// 	lazy: true
// });

// console.log(await todos);

// const currentUser = useAuthUser();
</script>

<style lang="scss" scoped>
.layout {
	display: flex;
	flex-direction: column;
}
</style>
