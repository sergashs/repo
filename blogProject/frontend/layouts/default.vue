<template>
	<div class="layout">
		<template v-if="!state.loading">
			<loading-outlined :style="{ fontSize: '20px' }" />
		</template>
		<template v-else>
			<Header v-if="state.loading" />
			<NuxtPage v-if="state.loading" />
		</template>
	</div>
</template>

<script setup>
import Header from "@/components/layout/Header";
import { LoadingOutlined } from "@ant-design/icons-vue";
import { useStore } from "vuex";
import { reactive } from "vue";

const store = useStore();
const getUser = () => store.dispatch("user/getUser");
const state = reactive({
	loading: false
});

onMounted(async () => {
	if (localStorage.getItem("token")) {
		getSelfUser();
	} else {
		state.loading = true;
	}
});

const getSelfUser = async () => {
	await getUser()
		.then((response) => {
			if (response.username) {
				return response;
			}
		})
		.catch((error) => {
			console.log(error);
			return error;
		})
		.finally(() => {
			state.loading = true;
		});
};

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
	justify-content: center;

	.anticon-loading {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
}
</style>
