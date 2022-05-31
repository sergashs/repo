<template>
	<div class="input-group">
		<label v-if="inputType === 'input'">
			<span v-if="label" class="label">{{ label }}</span>
			<input class="form-control" :type="type" :placeholder="placeholder" :value="value" v-on="listeners" @input="onInput" />
			<slot name="error">
				<span v-if="errorShowing" class="error-message"
					><span>{{ errorMessage }}</span></span
				>
			</slot>
		</label>
		<label v-if="inputType === 'textarea'">
			<span v-if="label" class="label">{{ label }}</span>
			<div class="textarea-holder">
				<textarea ref="textarea" class="form-control" :maxlength="maxlength" :placeholder="placeholder" :value="value" v-on="listeners" @input="onInput"></textarea>
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
		value: {
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
		listeners() {
			const { input, ...rest } = this.$listeners;
			return rest;
		},

		maxLength() {
			return this.maxlength - this.value.length;
		}
	},
	methods: {
		onInput(value) {
			this.$emit("input", value.target.value);
		},
		onChange(value) {
			this.$emit("change", value.target.value);
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

	label {
		width: 100%;
	}

	.label {
		display: block;
		margin-bottom: 1rem;
		font-size: 2rem;
		line-height: 1.3;

		@include media-breakpoint-down(md) {
			font-size: 1.4rem;
		}
	}

	.form-control {
		padding: 1rem 1.8rem;
		font-size: 1.6rem;
		color: $black;
		border: 0.1rem solid rgba($black, 0.2);
		border-radius: 0.2rem;

		&::placeholder {
			color: rgba($black, 0.5);
		}

		@include media-breakpoint-down(md) {
			font-size: 1.4rem;
		}

		&:focus {
			box-shadow: none;
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

		@include media-breakpoint-down(md) {
			font-size: 1.5rem;
		}
	}
}
</style>
