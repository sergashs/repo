<template>
	<div class="container">
		<div v-if="loading" class="col"><loading-outlined :style="{ fontSize: '20px' }" /></div>
		<div v-else>
			<div class="form-holder">
				<div class="form-group">
					<p>title</p>
					<a-input type="text" v-model:value="data.title" placeholder="title" />
				</div>

				<div class="form-group">
					<p>content</p>
					<a-textarea v-model:value="data.content" placeholder="content" :rows="10" />
				</div>

				{{ data }} <br />

				<a-button type="primary" :loading="loading" @click="updatePost()">Save</a-button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ApiNews from "@/api/news";
import { LoadingOutlined } from "@ant-design/icons-vue";

const data = ref([]);
const loading = ref(true);
const route = useRoute();

function getPost(id) {
	loading.value = true;
	ApiNews.getOnePost(id)
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

function updatePost() {
	loading.value = true;
	ApiNews.update(data.value)
		.then((response) => {
			console.log(response);
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
