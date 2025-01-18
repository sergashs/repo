<template>
	<div class="contact-form">
		<form @submit.prevent="">
			<Input v-model="form.name" :error-showing="$v.form.name.$error" label="Name" placeholder="Your name" @input="formatInput('name')" />
			<PhoneInput ref="telInput" label="Phone" v-model="form.phone" :error-showing="$v.form.phone.$error" @update="onPhoneInput">
				<template #error>
					<span v-if="$v.form.phoneIsValid.$dirty && $v.form.phoneIsValid.$invalid && !$v.form.phone.$error" class="error-message">
						<span v-if="$v.form.phoneIsValid.$error">Incorrect number</span>
					</span>
					<span v-if="$v.form.phone.$dirty && $v.form.phone.$invalid" class="error-message">
						<span v-if="$v.form.phone.$error">Requred filed</span>
					</span>
				</template>
			</PhoneInput>
			<Input v-model="form.email" label="Email" :error-showing="$v.form.email.$error" placeholder="Email" @input="formatInput('email')">
				<template #error>
					<span v-if="$v.form.email.$dirty && $v.form.email.$invalid" class="error-message">
						<span v-if="!$v.form.email.email">Incorrect email</span>
						<span v-if="!$v.form.email.required">Requred filed</span>
					</span>
				</template>
			</Input>
			<CustomSelect
				v-model="form.direction"
				:options="[
					{ title: 'Cafe', value: 'CAFE' },
					{ title: 'Restaurant', value: 'RESTAURANT' },
					{ title: 'Retail', value: 'RETAIL' },
					{ title: 'Other', value: 'OTHER' }
				]"
				default="Choose the direction of your business"
				class="select"
				:error-showing="$v.form.direction.$error"
				error-message="Requred filed"
				ref="customSelect"
			/>

			<Input v-model="form.message" label="Your message" placeholder="Your message" input-type="textarea" :error-showing="$v.form.message.$error" />
			<Button class="btn-dark text-capitalize" title="Request a call" @click="submitForm" />
		</form>
		<modal ref="modal" class="contact-from">
			<template #modal-body>
				<div class="modal-request-inner">
					<h3 class="h3 text-center">PROCESSING</h3>
					<div class="text-holder text-center" :class="request.status">
						<span v-if="request.loading" class="holder-dots">
							<span class="loading-dots"></span>
						</span>
						<p v-else>
							<template v-if="request.status === 'success'">
								Request from <strong>{{ form.email }}</strong>
								<span class="green">{{ request.message }}</span>
							</template>

							<template v-else>
								{{ request.message }}
							</template>
						</p>
					</div>
				</div>
			</template>
		</modal>
	</div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email, sameAs } from "vuelidate/lib/validators";
import Input from "@/components/Inputs/Input";
import PhoneInput from "@/components/Inputs/PhoneInput";
import Button from "@/components/Buttons/Button";
import CustomSelect from "@/components/Inputs/CustomSelect";
import Modal from "@/components/Modal";

export default {
	name: "ContactForm",
	components: {
		Input,
		PhoneInput,
		Button,
		CustomSelect,
		Modal
	},
	mixins: [validationMixin],
	data() {
		return {
			form: {
				name: "",
				email: "",
				message: "",
				phone: "",
				phone2: 0,
				direction: "",
				phoneIsValid: {}
			},
			request: {
				loading: true,
				status: "",
				message: ""
			}
		};
	},
	validations() {
		return {
			form: {
				name: { required },
				email: { required, email },
				message: { required },
				phone: { required },
				direction: { required },
				phoneIsValid: {
					sameAs: sameAs(() => true)
				}
			}
		};
	},
	methods: {
		onPhoneInput() {
			this.form.phoneIsValid = this.$refs.telInput.results.isValid;
		},
		formatInput(Vmodel) {
			if (Vmodel === "name") {
				const x = this.form[Vmodel].replace(/[&/\\#,+()$~%@!'":*?+=<>{}0-9]/g, "");
				this.form[Vmodel] = x.substring(0, 50);
			} else if (Vmodel === "email") {
				const x = this.form[Vmodel].replace(/[&/\\#,+()$~%^'":*?<>{ }]/g, "");
				this.form[Vmodel] = x.substring(0, 100);
			}
		},
		async submitForm() {
			this.$v.form.$touch();

			if (this.$v.form.$invalid) {
				return console.log("some erorr");
			} else {
				const url = this.$config.apiURL + "/contact-form";
				const formData = {
					name: this.form.name,
					email: this.form.email,
					text: this.form.message,
					phone: this.form.phone2,
					type: this.form.direction
				};
				// try {
				// 	// this.requestDataSet("success", "has been sent");
				// 	this.openModal();
				// 	const response = await fetch(url, {
				// 		headers: {
				// 			"Content-Type": "application/json"
				// 		},
				// 		method: "POST",
				// 		body: JSON.stringify(formData)
				// 	});
				// 	await response.json();
				// } catch (error) {
				// 	console.error("error", error);

				// 	this.requestDataSet("error", "something is wrong with the server. try later");
				// }

				const options = {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(formData)
				};

				this.openModal();

				await fetch(url, options)
					.then((response) => {
						if (!response.ok) {
							// get error message from body or default to response status
							const error = (formData && formData) || response.status;
							return Promise.reject(error);
						}

						if (response.ok) {
							this.requestDataSet("success", "has been sent");
						}
						console.log(response.status);
					})

					.catch((error) => {
						console.error("There was an error!", error);
						this.requestDataSet("error", "something is wrong with the server. try later");
					});

				setTimeout(() => {
					this.request.loading = false;
				}, 2000);
				setTimeout(() => {
					this.closeModal();
					this.clearForm();
				}, 5000);
			}
		},
		clearForm() {
			this.$v.$reset();
			this.form.name = "";
			this.form.email = "";
			this.form.message = "";
			this.form.phone = "";
			this.form.direction = "";

			this.$refs.customSelect.selected = "Choose the direction of your business";
			this.request.loading = true;
		},
		requestDataSet(status, message) {
			this.request.status = status;
			this.request.message = message;
		},
		openModal() {
			this.$refs.modal.handleOpen();
		},
		closeModal() {
			this.$refs.modal.handleClose();
		}
	}
};
</script>

<style lang="scss" scoped>
.contact-form {
	max-width: 59.5rem;
	width: 100%;
	padding: 8rem;
	background: white;
	box-shadow: 0 0.4rem 2.4rem rgba(0, 0, 0, 0.25);
	border-radius: 2rem;

	@include media-breakpoint-down(xl) {
		padding: 4rem;
	}

	@include media-breakpoint-down(md) {
		padding: 3rem 2rem;
	}

	.btn {
		width: 100%;
	}
}

.modal-request-inner {
	padding: 6rem 4rem 4rem 4rem;

	.holder-dots {
		display: inline-block;
		transform: translateX(-100%);
	}

	.loading-dots {
		font-size: 4rem;
		line-height: 0;

		&::after {
			content: " .";
			animation: dots 1s steps(5, end) infinite;
		}
	}

	@keyframes dots {
		0%,
		20% {
			color: rgba(0, 0, 0, 0);
			text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);
		}
		40% {
			color: black;
			text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);
		}
		60% {
			text-shadow: 0.25em 0 0 black, 0.5em 0 0 rgba(0, 0, 0, 0);
		}
		80%,
		100% {
			text-shadow: 0.25em 0 0 black, 0.5em 0 0 black;
		}
	}
}
</style>
