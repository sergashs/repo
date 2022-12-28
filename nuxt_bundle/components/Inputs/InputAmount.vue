<template>
	<div class="input-amount">
		<span class="minus" @click="minus">-</span>
		<input class="form-control" type="number" :value="result" />
		<span class="plus" @click="plus">+</span>
	</div>
</template>

<script>
export default {
	name: "InputAmount",
	//   props: {
	//     value: {
	//       type: Number,
	//       default: 1,
	//     },
	//   },
	data() {
		return {
			result: 1
		};
	},

	methods: {
		emitResult() {
			this.$emit("input", this.result);
		},
		plus() {
			this.result += 1;
			this.emitResult();
		},
		minus() {
			if (this.result > 1) {
				this.result -= 1;
				this.emitResult();
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.input-amount {
	display: flex;
	align-items: center;

	.form-control {
		width: 40px;
		height: 40px;
		padding: 0;
		font-size: 18px;
		text-align: center;
		border-radius: 0;
		border: solid 2px $black;
		pointer-events: none;

		&:focus {
			border-color: $black;
		}
	}

	.plus,
	.minus {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		font-size: 20px;
		cursor: pointer;
		user-select: none;

		@include media-breakpoint-down(lg) {
			width: 28px;
		}
	}

	.minus,
	.plus {
		width: 25px;
	}

	.minus {
		justify-content: flex-start;
	}

	.plus {
		justify-content: flex-end;
	}
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

/* Firefox */
input[type="number"] {
	-moz-appearance: textfield;
}
</style>
