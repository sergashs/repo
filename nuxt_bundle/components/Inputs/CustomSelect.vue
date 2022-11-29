<template>
	<div class="custom-select" :tabindex="tabindex" @blur="open = false">
		<span v-if="label" class="label">{{ label }}</span>
		<div class="selected" :class="[{ open: open }, !selected.title ? 'no-selected' : '']" @click="open = !open">
			{{ !selected.title ? this.default : selected.title }}
		</div>
		<div class="select-items" :class="{ selectHide: !open }" @click="clicked">
			<div
				v-for="(option, i) of options"
				:key="i"
				@click="
					selected = option;
					open = false;
				"
				class="select-item"
			>
				{{ option.title }}
			</div>
		</div>
		<span v-if="errorShowing" class="error-message"
			><span>{{ errorMessage }}</span></span
		>
		<!-- <input type="text" :value="selected.title" /> -->
	</div>
</template>

<script>
export default {
	props: {
		options: {
			type: Array,
			required: true,
			default: () => []
		},
		default: {
			type: String,
			required: false,
			default: null
		},
		tabindex: {
			type: Number,
			required: false,
			default: 0
		},
		errorShowing: {
			type: Boolean,
			default: false
		},
		errorMessage: {
			type: String,
			required: false,
			default: null
		},
		label: {
			type: String,
			default: ""
		},
		value: {
			type: [String, Object],
			default: ""
		}
	},
	data() {
		return {
			selected: this.default ? this.default : this.options.length > 0 ? this.options[0] : null,
			open: false
		};
	},
	// methods() {
	// 	this.$emit("input", this.selected);
	// },
	methods: {
		clicked() {
			this.$emit("input", this.selected.title);
		}
	}
};
</script>

<style lang="scss" scoped>
.custom-select {
	position: relative;
	margin-bottom: 3.2rem;
	font-size: 1.8rem;
	cursor: pointer;

	@include media-breakpoint-down(lg) {
		margin-bottom: 2.4rem;
		font-size: 1.6rem;
	}

	.label {
		display: block;
		margin-bottom: 1.2rem;
		font-size: 2rem;
		line-height: 1;

		@include media-breakpoint-down(lg) {
			margin-bottom: 1rem;
			font-size: 1.6rem;
		}
	}

	.selected {
		display: flex;
		justify-content: space-between;
		padding: 1.7rem 2rem;
		align-items: center;
		color: $black;
		user-select: none;
		border: solid 0.1rem rgba($black, 0.2);
		border-radius: 0.3rem;

		&:after {
			content: "";
			right: 3rem;
			width: 0;
			height: 0;
			border: 5px solid transparent;
			border-color: black transparent transparent transparent;
		}

		&.no-selected {
			color: rgba($black, 0.3);
		}
	}

	.select-items {
		overflow: hidden;
		position: absolute;
		left: 0;
		top: 100%;
		width: 100%;
		background-color: $white;
		z-index: 1;
		transition: $transition;
		border-bottom-right-radius: 0.3rem;
		border-bottom-left-radius: 0.3rem;
		border-left: solid 0.1rem rgba($black, 0.2);
		border-right: solid 0.1rem rgba($black, 0.2);

		&.selectHide {
			opacity: 0;
			visibility: hidden;
			pointer-events: none;
		}
	}

	.select-item {
		padding: 1.7rem 2rem;
		border-bottom: solid 0.1rem rgba($black, 0.2);
		transition: $transition;

		&:hover {
			// background: $seashell;
		}
	}

	.error-message {
		position: absolute;
		font-size: 1.4rem;
		color: $red;

		@include media-breakpoint-down(md) {
			font-size: 1.3rem;
		}
	}
}
</style>
