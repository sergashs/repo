<template>
	<div class="todo-item">
		<div class="top">
			#{{ id }}

			<div class="btns-holder">
				<Button :title="this.isEdit === true ? 'Save' : 'Edit'" @click="edit" />
				<Button title="Delete" @click="$emit('remove')" />
			</div>
		</div>
		<template v-if="!isEdit"> {{ text }}</template>
		<template v-else>
			<!-- <input type="text" :value="text" @change="markCompleted" /> -->
			<Input :model-value="text" @change="editInput" />
		</template>
	</div>
</template>

<script>
import Button from "@/components/Button";
import Input from "@/components/Input";

export default {
	name: "TodoItem",
	components: {
		Button,
		Input
	},
	props: {
		id: {
			type: Number
		},
		text: {
			type: String
		}
	},
	data() {
		return {
			isEdit: false
		};
	},

	methods: {
		editInput(e) {
			this.$emit("edit-text", e.target.value);
		},

		edit() {
			this.isEdit = !this.isEdit;
		}
	}
};
</script>

<style lang="scss" scoped>
.todo-item {
	margin-bottom: 2rem;
	padding: 2rem;
	background: lighten($mercury, 7);

	.top {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		margin-bottom: 1rem;

		.btns-holder {
			.btn {
				&:not(:last-child) {
					margin-right: 1rem;
				}
			}
		}
	}
}
</style>
