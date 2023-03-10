<template>
	<div class="container">
		<div v-if="loading" class="col"><i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i></div>
		<div v-else>
			<div class="form-holder">
				<div class="form-group">
					<p>title</p>
					<InputText type="text" v-model="data.title" placeholder="title" />
				</div>

				<div class="form-group">
					<p>content</p>
					<Textarea v-model="data.content" placeholder="content" autoResize rows="5" cols="30" />
				</div>

				{{ data }} <br />

				<a-button type="primary" :loading="loading" @click="updatePost()">Save</a-button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ApiPosts from "@/api/posts";

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

async function updatePost() {
	loading.value = true;
	await ApiPosts.update(data.value)
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
