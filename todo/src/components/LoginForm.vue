<template>
	<div class="login-form">
		<div class="inputs-holder">
			<Input label="Name" v-model="form.name">
				<!-- <template v-slot:error>
				:error-showing="$v.form.email.$error"
				<span v-if="$v.form.email.$dirty && $v.form.email.$invalid" class="error-message">
					<span v-if="!$v.form.email.email">Incorrect email</span>
					<span v-if="!$v.form.email.required">Requred filed</span>
				</span>
			</template> -->
			</Input>
			<Input label="Password" v-model="form.password">
				<!-- <template v-slot:error>
				:error-showing="$v.form.email.$error"
				<span v-if="$v.form.email.$dirty && $v.form.email.$invalid" class="error-message">
					<span v-if="!$v.form.email.email">Incorrect email</span>
					<span v-if="!$v.form.email.required">Requred filed</span>
				</span>
			</template> -->
			</Input>

			<Button title="LOGIN" @click="login" />

			<div class="forgot-holder">
				<a href="#" class="">Forgot Password</a>
			</div>
		</div>
		<a href="#" class="register-link">Register now</a>
	</div>
</template>

<script>
import Input from "@/components/Input";
import Button from "@/components/Button";

export default {
	name: "LoginForm",
	components: {
		Input,
		Button
	},
	data() {
		return {
			form: {
				name: "",
				password: ""
			},
			users: [
				{
					name: "Admin",
					password: "12345"
				}
			]
		};
	},
	methods: {
		login() {
			// this.login = true;
			if (this.password === this.users[0].password && this.name === this.users[0].name) {
				this.$router.push("Todo").then(() => window.scrollTo(0, 0));
				// localStorage.isAuthorized = true;
				// localStorage.username = this.username;

				// my
				//   localStorage.setItem("contacts", JSON.stringify(this.form));
				//  localStorage.removeItem("projectType");
				//  const form = localStorage.getItem("contacts");
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.login-form {
	background: $white;
	box-shadow: 0.2rem 0.2rem 1.5rem 0.2rem rgba($black, 0.1);

	.inputs-holder {
		padding: 4rem 3rem 2.3rem 3rem;

		@include screen($md, "max") {
			padding: 3rem 2rem 1.5rem 2rem;
		}
	}

	.btn {
		width: 100%;
		margin-bottom: 2rem;
		padding-top: 1.1rem;
		padding-bottom: 1.1rem;
		font-weight: 400;
		font-size: 2.5rem;
		text-transform: uppercase;

		@include screen($md, "max") {
			padding-top: 0.8rem;
			padding-bottom: 0.8rem;
			font-size: 1.8rem;
		}
	}

	.forgot-holder {
		display: flex;
		justify-content: center;
		font-size: 2rem;
		color: $allports;

		@include screen($md, "max") {
			font-size: 1.8rem;
		}

		a {
			&:hover {
				text-decoration: underline;
			}
		}
	}

	.register-link {
		display: flex;
		justify-content: center;
		padding: 1.7rem;
		font-size: 2.5rem;
		color: $mine-shaft;
		background: $wild-sand;

		@include screen($md, "max") {
			padding: 1.2rem;
			font-size: 1.8rem;
		}

		&:hover {
			background: darken($wild-sand, 2);
		}
	}
}
</style>
