<template>
	<div class="input-group">
		<label v-if="inputType === 'input'">
			<span v-if="label" class="label">{{ label }}</span>
			<input class="form-control" :type="type" :placeholder="placeholder" :value="modelValue" @input="onInput" />
			<slot name="error">
				<span v-if="errorShowing" class="error-message"
					><span>{{ errorMessage }}</span></span
				>
			</slot>
		</label>
		<label v-if="inputType === 'textarea'">
			<span v-if="label" class="label">{{ label }}</span>
			<div class="textarea-holder">
				<textarea ref="textarea" class="form-control" :maxlength="maxlength" :placeholder="placeholder" :value="modelValue" @input="onInput"></textarea>
				<span class="maxlength">
					{{ maxLength }}
				</span>
			</div>
			<slot name="error">
				<span v-if="errorShowing" class="error-message"
					><span>{{ errorMessage }}</span></span
				>
			</slot>
		</label>
	</div>
</template>

<script>
export default {
	name: "Input",
	props: {
		inputType: {
			type: String,
			default: "input"
		},
		type: {
			type: String,
			default: "text"
		},
		modelValue: {
			type: String,
			default: ""
		},
		label: {
			type: String,
			default: ""
		},
		placeholder: {
			type: String,
			default: ""
		},
		errorMessage: {
			type: String,
			default: "Required field"
		},
		errorShowing: {
			type: Boolean,
			default: false
		},
		maxlength: {
			type: Number,
			default: 500
		}
	},
	computed: {
		maxLength() {
			return this.maxlength - this.value.length;
		}
	},
	methods: {
		onInput(e) {
			this.$emit("update:modelValue", e.target.value);
		}
	}
};
</script>

<style lang="scss" scoped>
.input-group {
	position: relative;
	display: flex;
	flex-direction: column;
	margin-bottom: 4rem;

	@include screen($md, "max") {
		margin-bottom: 2rem;
	}

	label {
		width: 100%;
	}

	.label {
		display: block;
		font-weight: 300;
		margin-bottom: 0.8rem;
		font-size: 1.8rem;

		@include screen($md, "max") {
			font-size: 1.6rem;
		}
	}

	.form-control {
		width: 100%;
		padding: 1.65rem 1rem;
		font-size: 1.8rem;
		color: $black;
		border: 0.1rem solid $dusty-gray;
		border-radius: 0;

		@include screen($md, "max") {
			font-size: 1.6rem;
		}

		&::placeholder {
			color: rgba($black, 0.5);
		}

		&:focus {
			border-color: $cod-gray;
			border-radius: 0;
			outline: none;
		}
	}

	.textarea-holder {
		position: relative;

		.maxlength {
			position: absolute;
			right: 1.2rem;
			bottom: 1.5rem;
			font-size: 1rem;
			color: rgba($black, 0.5);
		}
	}

	textarea {
		min-height: 11.5rem;
		resize: none;
	}

	.error-message {
		position: absolute;
		font-size: 1.6rem;
		color: $red;
	}
}
</style>
