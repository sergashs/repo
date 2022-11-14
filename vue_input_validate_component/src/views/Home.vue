<template>
	<div class="home">
		<div class="form-demo">
			<Dialog v-model:visible="showMessage" :breakpoints="{ '960px': '80vw' }" :style="{ width: '30vw' }" position="top">
				<div class="flex align-items-center flex-column pt-6 px-3">
					<i class="pi pi-check-circle" :style="{ fontSize: '5rem', color: 'var(--green-500)' }"></i>
					<h5>Registration Successful!</h5>
					<p :style="{ lineHeight: 1.5, textIndent: '1rem' }">
						Your account is registered under name <b>{{ name }}</b> ; it'll be valid next 30 days without activation. Please check <b>{{ email }}</b> for activation instructions.
					</p>
				</div>
				<template #footer>
					<div class="flex justify-content-center">
						<Button label="OK" @click="toggleDialog" class="p-button-text" />
					</div>
				</template>
			</Dialog>

			<div class="flex justify-content-center">
				<div class="card">
					<h5 class="text-center">Register</h5>
					<form @submit.prevent="handleSubmit(!v$.$invalid)" class="p-fluid">
						<Input
							:v-object="v$.name"
							label="Name"
							:error="{
								invalid: v$.name.$invalid,
								submitted: submitted,
								pending: v$.name.$pending.$response
							}"
						/>

						<Input
							:v-object="v$.email"
							label="Email"
							:error="{
								invalid: v$.email.$invalid,
								submitted: submitted,
								pending: v$.email.$pending.$response,
								error: v$.email.$error
							}"
						/>

						<Button type="submit" label="Submit" class="mt-2" />
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import Input from "@/components/Input";

export default {
	setup: () => ({ v$: useVuelidate() }),
	components: {
		Input
	},
	data() {
		return {
			name: "",
			email: "",
			password: "",
			date: null,
			country: null,
			accept: null,
			submitted: false,
			countries: null,
			showMessage: false
		};
	},
	countryService: null,
	validations() {
		return {
			name: {
				required
			},
			email: {
				required,
				email
			}
		};
	},
	methods: {
		handleSubmit(isFormValid) {
			this.submitted = true;

			if (!isFormValid) {
				return;
			}

			this.toggleDialog();
		},
		toggleDialog() {
			this.showMessage = !this.showMessage;

			if (!this.showMessage) {
				this.resetForm();
			}
		},
		resetForm() {
			this.name = "";
			this.email = "";

			this.submitted = false;
		}
	}
};
</script>

<style lang="scss" scoped>
.home {
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
}

.form-demo {
	.card {
		min-width: 450px;

		form {
			margin-top: 2rem;
		}

		.field {
			margin-bottom: 1.5rem;
		}
	}

	@media screen and (max-width: 960px) {
		.card {
			width: 80%;
		}
	}
}
</style>
