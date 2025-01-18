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

				<a-upload v-model:value="form.img" name="file" @change="handleFileSelect">
					<a-button>
						<!-- <upload-outlined></upload-outlined> -->
						Click to Upload
					</a-button>
				</a-upload>

				{{ form }} <br />

				<a-button type="primary" :loading="loading" @click="createPost()">Create post</a-button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ApiNews from "@/api/news";
import Toast from "@/services/Toast.js";

const form = ref({});
const loading = ref(false);
const requestError = ref();
const file = ref({});

function handleFileSelect(e) {
	// file.value = e.target.files[0];
	// form.value.img = file.value;
	// console.log(form.value.img);
	// originFileObj
	form.value.img = e.fileList[0].originFileObj;

	console.log(e.fileList[0]);
}

function createPost() {
	loading.value = true;

	const formData = new FormData();
	for (const key in form.value) {
		if (form.value.hasOwnProperty(key)) {
			formData.append(key, form.value[key]);
		}
	}
	// formData.append("title", form.value.title);
	// formData.append("content", form.value.content);
	// formData.append("img", form.value.img); // add image file

	ApiNews.create(formData, { headers: { "Content-Type": "multipart/form-data" } })
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
