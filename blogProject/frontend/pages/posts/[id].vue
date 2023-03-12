<template>
	<div class="container">
		<div v-if="loading" class="col"><loading-outlined :style="{ fontSize: '20px' }" /></div>
		<div v-else>
			<div class="form-holder">
				<div class="form-group">
					<h1>{{ data.title }}</h1>
				</div>

				<div class="form-group">
					<p>{{ data.content }}</p>
				</div>

				{{ data }} <br />
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ApiPosts from "@/api/posts";
import { LoadingOutlined } from "@ant-design/icons-vue";

const data = ref([]);
const loading = ref(true);
const route = useRoute();

async function getPost(id) {
	loading.value = true;
	await ApiPosts.getOnePost(id)
		.then((response) => {
			data.value = response;
		})
		.catch((err) => {
			error.value = err;
			loading.value = false;
		})
		.finally(() => {
			loading.value = false;
		});
}

onMounted(() => {
	getPost(route.params.id);
});
</script>
