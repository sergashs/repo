<template>
	<div class="contact-form">
		<form @submit.prevent="">
			<div class="row justify-content-center">
				<div class="col-md-6">
					<Input v-model="form.name" :error-showing="$v.form.name.$error" placeholder="Name" @input="formatInput('name')" />
					<PhoneInput ref="telInput" v-model="form.phone" :error-showing="$v.form.phone.$error" @update="onPhoneInput">
						<template #error>
							<span v-if="$v.form.phoneIsValid.$dirty && $v.form.phoneIsValid.$invalid && !$v.form.phone.$error" class="error-message">
								<span v-if="$v.form.phoneIsValid.$error">Incorrect number</span>
							</span>
							<span v-if="$v.form.phone.$dirty && $v.form.phone.$invalid" class="error-message">
								<span v-if="$v.form.phone.$error">Requred filed</span>
							</span>
						</template>
					</PhoneInput>
					{{ form.phone }}
					<Input v-model="form.email" :error-showing="$v.form.email.$error" placeholder="Email" @input="formatInput('email')">
						<template #error>
							<span v-if="$v.form.email.$dirty && $v.form.email.$invalid" class="error-message">
								<span v-if="!$v.form.email.email">Incorrect email</span>
								<span v-if="!$v.form.email.required">Requred filed</span>
							</span>
						</template>
					</Input>
					<Input v-model="form.message" placeholder="Write us about your project in general..." input-type="textarea" :error-showing="$v.form.message.$error" />
					<button class="btn btn-primary" @click="submitForm">submit</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email, sameAs } from "vuelidate/lib/validators";
import Input from "@/components/Inputs/Input";
import PhoneInput from "@/components/Inputs/PhoneInput";

export default {
	name: "ContactForm",
	components: {
		Input,
		PhoneInput
	},
	mixins: [validationMixin],
	data() {
		return {
			form: {
				name: "",
				email: "",
				message: "",
				phone: "",
				phoneIsValid: {}
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
				phoneIsValid: {
					sameAs: sameAs(() => true)
				}
			}
		};
	},
	methods: {
		onPhoneInput() {
			// console.log(this.$refs.telInput.results);
			console.log(this.$refs.telInput.results);

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
		submitForm() {
			this.$v.form.$touch();

			if (this.$v.form.$invalid) {
				return console.log("some erorr");
			} else {
				console.log("all good");
				this.$v.$reset();
				this.form.name = "";
				this.form.email = "";
				this.form.message = "";
				this.form.phone = "";
			}
		}
	}
};
</script>
