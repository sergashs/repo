<template>
	<div class="todo-page">
		<div class="page-content">
			<div class="header">
				<strong class="logo">
					<router-link to="/">
						<img src="@/assets/images/icon-logo.svg" alt="icon logo" />
					</router-link>
				</strong>
			</div>
			<div class="todo-wrapper">
				<div class="container">
					<div class="logout-hold">
						<Button @click="logout" title="Logout" />
					</div>
					<h1>Thank you {{ userAuth && userAuth.userName }}!</h1>
					<div class="todo-list">
						<template v-if="todos && todos.length <= 0"><div class="empty-list">todo list is empty, please add some :)</div></template>
						<template v-else>
							<TodoItem
								v-for="(item, index) in todos"
								:key="item.id"
								:id="item.id"
								:text="item.text"
								@edit-text="
									($value) => {
										item.text = $value;
									}
								"
								@remove="todos.splice(index, 1)"
							/>
						</template>
					</div>
					<div class="add-form">
						<Input v-model="newTodo">
							<template v-slot:error>
								<span v-if="valid.newTodo">{{ valid.newTodo }}</span>
							</template>
						</Input>
						<Button @click="addTodo" title="Add Todo" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Input from "@/components/Input";
import Button from "@/components/Button";
import TodoItem from "@/components/TodoItem";

export default {
	name: "Todo",
	components: {
		Input,
		Button,
		TodoItem
	},
	data() {
		return {
			newTodo: "",
			todos: [],
			valid: {
				newTodo: ""
			},
			userAuth: {}
		};
	},

	mounted() {
		console.log(localStorage.getItem("userAuth"));

		const userAuth = localStorage.getItem("userAuth");

		this.userAuth = JSON.parse(userAuth);

		if (!this.userAuth) {
			this.$router.push("/");
		}
	},

	methods: {
		addTodo() {
			if (this.newTodo.length <= 0) {
				this.valid.newTodo = "Required field";
			} else {
				const highestId = Math.max.apply(
					Math,
					this.todos.map((item) => item.id)
				);

				this.todos.push({
					id: this.todos.length <= 0 ? 1 : highestId + 1,
					text: this.newTodo
				});

				this.newTodo = "";
				this.valid.newTodo = "";
			}
		},
		logout() {
			localStorage.removeItem("userAuth");
			this.$router.push("/");
		}
	},

	computed: {}
};
</script>

<style lang="scss" scoped>
.todo-page {
	position: relative;
	padding-top: 6.5rem;
	padding-bottom: 17rem;
	min-height: 100vh;
	background: $mercury;

	@include screen($md, "max") {
		padding-top: 4.5rem;
		padding-bottom: 8rem;
	}

	.header {
		display: flex;
		justify-content: center;
		margin-bottom: 6.6rem;

		@include screen($md, "max") {
			margin-bottom: 3.3rem;
		}

		.logo {
			a {
				display: inline-block;
				width: 18.6rem;
				max-width: 100%;

				@include screen($md, "max") {
					max-width: 10rem;
				}

				img {
					width: 100%;
					height: auto;
				}
			}
		}
	}

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 70%;
		background: linear-gradient(180deg, #00afed 0%, #00569a 100%);
	}

	.page-content {
		position: relative;
	}

	.todo-wrapper {
		width: 100%;
		max-width: 119.1rem;
		margin: auto;
		padding: 3.2rem 0;
		background: $white;
		min-height: 66rem;

		h1 {
			font-weight: 700;
			font-size: 6rem;
			text-align: center;

			@include screen($md, "max") {
				font-size: 3rem;
			}
		}
	}

	.todo-list {
		margin-bottom: 4rem;

		.empty-list {
			font-size: 2rem;
			text-align: center;
		}
	}

	.logout-hold {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 2rem;
	}
}
</style>
