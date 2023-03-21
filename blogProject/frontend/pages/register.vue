<template>
	<div class="login-page">
		<div class="container">
			<div class="form-holder">
				<a-form :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }" :model="formState" name="basic" autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed">
					<a-form-item label="Username" name="username" :rules="[{ required: true, message: 'Please input your username!' }]">
						<a-input v-model:value="formState.username" />
					</a-form-item>

					<a-form-item label="Email" name="email" :rules="[{ required: true, message: 'Please input your email' }]">
						<a-input v-model:value="formState.email" />
					</a-form-item>

					<a-form-item label="Password" name="password" :rules="[{ required: true, message: 'Please input your password!' }]">
						<a-input-password v-model:value="formState.password" />
					</a-form-item>

					<a-form-item :wrapper-col="{ offset: 8, span: 16 }">
						<a-button :loading="loading" type="primary" html-type="submit">sign in</a-button>
					</a-form-item>
				</a-form>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import ApiAuth from "@/api/auth";
import Toast from "@/services/Toast.js";

const loading = ref(false);
const formState = ref({
	username: "",
	email: "",
	password: ""
});

function onFinish(values) {
	login();
	// console.log("Success:", values);
}

function onFinishFailed(errorInfo) {
	console.log("Failed:", errorInfo);
}

function login() {
	loading.value = true;

	ApiAuth.register(formState.value)
		.then((response) => {
			if (response.status === 500) {
				return Toast.error(response.data.error.sqlMessage);
			}
			if (response.status === 401) {
				return Toast.error("something wrong");
			}
			if (response.status === 200) {
				return;
			}
			Toast.success(`login is successful`);
			console.log(response);
		})
		.catch((err) => {
			loading.value = false;
			console.log(err);
		})
		.finally(() => {
			loading.value = false;
		});
}
</script>

<style lang="scss" scoped>
.login-page {
	flex: 1;
	display: flex;
	align-items: center;

	.form-holder {
		max-width: 400px;
		margin: auto;

		.basic_username {
			display: block;
		}
	}
}
</style>
