<template>
	<div class="login-form">
		<div class="inputs-holder">
			<Input label="Name" v-model="form.name">
				<template v-slot:error>
					<span v-if="valid.name">{{ valid.name }}</span>
				</template>
			</Input>
			<Input label="Password" v-model="form.password" type="password">
				<template v-slot:error>
					<span v-if="valid.password">{{ valid.password }}</span>
				</template>
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
			valid: {
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

			if (this.form.name !== this.users[0].name) {
				this.valid.name = "Wrong username";
			}

			if (this.form.name.length <= 0) {
				this.valid.name = "Required field";
			}

			if (this.form.password !== this.users[0].password) {
				this.valid.password = "Wrong password";
			}

			if (this.form.name.length <= 0) {
				this.valid.password = "Required field";
			}

			console.log("before");

			if (this.form.password === this.users[0].password && this.form.name == this.users[0].name) {
				this.$router.push("Todo");
				localStorage.setItem("userAuth", JSON.stringify({ auth: true, userName: this.form.name }));
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
