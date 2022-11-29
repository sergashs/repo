<template>
	<div class="phone-input">
		<label>
			<span class="label" v-if="label">{{ label }}</span>
			<VuePhoneNumberInput :value="value" :border-radius="2" maxlength="17" v-on="listeners" @input="onInput" @update="results = $event" />
			<slot name="error">
				<span v-if="errorShowing" class="error-message"
					><span>{{ errorMessage }}</span></span
				>
			</slot>
		</label>
	</div>
</template>

<script>
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";

export default {
	name: "PhoneInput",
	components: {
		VuePhoneNumberInput
	},
	model: {
		event: "input",
		prop: "value"
	},
	props: {
		label: {
			type: String,
			default: ""
		},
		value: {
			type: [Object, String],
			default: () => ({})
		},
		errorMessage: {
			type: String,
			default: "Required field"
		},
		errorShowing: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			results: {}
		};
	},
	computed: {
		listeners() {
			const { input, ...rest } = this.$listeners;
			return rest;
		}
	},
	methods: {
		onInput(value) {
			this.$emit("input", value);
		}
	}
};
</script>

<style lang="scss" scoped>
.phone-input {
	margin-bottom: 4rem;

	label {
		width: 100%;
	}

	.label {
		display: block;
		width: 100%;
		margin-bottom: 1rem;
		font-size: 2rem;
		line-height: 1.3;

		@include media-breakpoint-down(md) {
			font-size: 1.4rem;
		}
	}

	@include media-breakpoint-down(md) {
		margin-bottom: 4rem;
	}
}
</style>

<style lang="scss">
.phone-input {
	position: relative;

	.vue-phone-number-input {
		.select-country-container {
			max-width: 100%;
			width: 100%;
		}
	}

	.country-selector {
		min-height: 4.2rem;
		height: 4.2rem;

		input {
			border-color: rgba($black, 0.2) !important;
		}
	}

	.country-selector__toggle {
		pointer-events: none;
	}

	.country-selector__input {
		min-height: 4.2rem;
		height: 4.2rem;
	}

	.input-tel__input {
		min-height: 4.2rem;
		height: 4.2rem;
	}

	.input-tel {
		min-height: 4.2rem;
		height: 4.2rem;

		input {
			border-color: rgba($black, 0.2) !important;
		}
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
