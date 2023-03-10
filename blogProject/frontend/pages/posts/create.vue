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

				{{ form }} <br />

				<a-button type="primary" :loading="loading" @click="createPost()">Create post</a-button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ApiPosts from "@/api/posts";
import useToasts from "@/mixins/useToasts";

const form = ref({});
const loading = ref(false);
const requestError = ref();
const { warning: toastWarning, success: toastSuccess, error: toastError } = useToasts();

async function createPost() {
	loading.value = true;

	await ApiPosts.create(form.value)
		.then((response) => {
			if (response.status === 500) {
				return toastError(response.data.error.sqlMessage);
			}

			toastSuccess(`post will be created with id ${response.id}`);
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
