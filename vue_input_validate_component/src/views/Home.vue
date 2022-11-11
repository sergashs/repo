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
						<div class="field">
							<div class="p-float-label">
								<InputText id="name" v-model="v$.name.$model" :class="{ 'p-invalid': v$.name.$invalid && submitted }" />
								<label for="name" :class="{ 'p-error': v$.name.$invalid && submitted }">Name*</label>
							</div>
							<small v-if="(v$.name.$invalid && submitted) || v$.name.$pending.$response" class="p-error">{{ v$.name.required.$message.replace("Value", "Name") }}</small>
						</div>
						<div class="field">
							<div class="p-float-label p-input-icon-right">
								<i class="pi pi-envelope" />
								<InputText id="email" v-model="v$.email.$model" :class="{ 'p-invalid': v$.email.$invalid && submitted }" aria-describedby="email-error" />
								<label for="email" :class="{ 'p-error': v$.email.$invalid && submitted }">Email*</label>
							</div>
							<span v-if="v$.email.$error && submitted">
								<span id="email-error" v-for="(error, index) of v$.email.$errors" :key="index">
									<small class="p-error">{{ error.$message }}</small>
								</span>
							</span>
							<small v-else-if="(v$.email.$invalid && submitted) || v$.email.$pending.$response" class="p-error">{{ v$.email.required.$message.replace("Value", "Email") }}</small>
						</div>

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

export default {
	setup: () => ({ v$: useVuelidate() }),
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
