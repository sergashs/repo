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

				<a-upload action="" :multiple="true" :file-list="fileList" @change="handleChange">
					<a-button>
						<upload-outlined></upload-outlined>
						Upload
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
import ApiPosts from "@/api/posts";
import Toast from "@/services/Toast.js";

const form = ref({});
const loading = ref(false);
const requestError = ref();

const handleChange = (UploadChangeParam) => {
	let resFileList = [...info.fileList];

	// 1. Limit the number of uploaded files
	//    Only to show two recent uploaded files, and old ones will be replaced by the new
	resFileList = resFileList.slice(-2);

	// 2. read from response and show file link
	resFileList = resFileList.map((file) => {
		if (file.response) {
			// Component will show file.url as link
			file.url = file.response.url;
		}
		return file;
	});

	fileList.value = resFileList;
};

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
