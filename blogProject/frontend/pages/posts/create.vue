<template>
	<div class="add-post-page">
		<div class="container">
			<div class="form-holder">
				<div class="form-group">
					<p>title</p>
					<a-input v-model:value="form.title" placeholder="Title" />
				</div>

				<div class="form-group">
					<p>content</p>
					<a-textarea v-model:value="form.content" placeholder="content" :auto-size="{ minRows: 2, maxRows: 5 }" />
				</div>

				<!-- <a-upload v-model:value="form.img" name="file" action="/api/upload" @change="handleFileSelect">
					<a-button>
						<upload-outlined></upload-outlined>
						Click to Upload
					</a-button>
				</a-upload> -->

				<input type="file" @change="handleFileSelect" />

				{{ form }} <br />

				<a-button type="primary" :loading="loading" @click="createPost()">Create post</a-button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ApiPosts from "@/api/posts";
import Toast from "@/services/Toast.js";

const form = ref({});
const loading = ref(false);
const requestError = ref();
const file = ref({});

function handleFileSelect(e) {
	file.value = e.target.files[0];

	const img = new FormData();
	img.append("img", file);

	// form.value = { ...form.value, img };
	form.value.img = file.value;

	console.log(form.value.img);
}

function createPost() {
	loading.value = true;

	ApiPosts.create(form.value)
		.then((response) => {
			if (response.status === 500) {
				return Toast.error(response.data.error.sqlMessage);
			}
			Toast.success(`a post with id ${response.id} was created `);
		})
		.catch((err) => {
			loading.value = false;
		})
		.finally(() => {
			loading.value = false;
		});
}

onMounted(() => {});
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.form-group {
	margin-bottom: 15px;
}

.form-holder {
	max-width: 600px;
	width: 100%;
}
</style>
