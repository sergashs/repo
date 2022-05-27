<template>
	<div class="contact-form">
		<form @submit.prevent="">
			<div class="row justify-content-center">
				<div class="col-md-6">
					<Input v-model="form.name" :error-showing="$v.form.name.$error" placeholder="Name" @input="formatInput('name')" />
					<Input v-model="form.email" :error-showing="$v.form.email.$error" placeholder="Email" @input="formatInput('email')">
						<template #error>
							<span v-if="$v.form.email.$dirty && $v.form.email.$invalid" class="error-message">
								<span v-if="!$v.form.email.email">Incorrect email</span>
								<span v-if="!$v.form.email.required">Requred filed</span>
							</span>
						</template>
					</Input>
					<Input v-model="form.message" placeholder="Write us about your project in general..." input-type="textarea" :error-showing="$v.form.message.$error" />
					<button class="btn btn-primary">submit</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
import Input from "@/components/Inputs/Input";

export default {
	name: "ContactForm",
	components: {
		Input
	},
	mixins: [validationMixin],
	data() {
		return {
			form: {
				name: "",
				email: "",
				message: ""
			}
		};
	},
	validations() {
		return {
			form: {
				name: { required },
				email: { required, email },
				message: { required }
			}
		};
	},
	methods: {
		formatInput(Vmodel) {
			if (Vmodel === "name") {
				const x = this.form[Vmodel].replace(/[&/\\#,+()$~%@!'":*?+=<>{}0-9]/g, "");
				this.form[Vmodel] = x.substring(0, 50);
			} else if (Vmodel === "email") {
				const x = this.form[Vmodel].replace(/[&/\\#,+()$~%^'":*?<>{ }]/g, "");
				this.form[Vmodel] = x.substring(0, 100);
			}
		}
	}
};
</script>
