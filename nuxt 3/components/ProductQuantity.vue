<script setup>
import { ref } from "vue";

// reactive state
let quantity = ref(1);

// functions that mutate state and trigger updates
function increment() {
	quantity.value++;
}

function decrement() {
	if (quantity.value > 1) {
		quantity.value--;
	}
}
</script>

<template>
	<div class="product-quantity">
		<button class="btn-quantity minus" @click="decrement"></button>
		<input type="number" :value="quantity" class="form-control" />
		<button class="btn-quantity plus" @click="increment"></button>
	</div>
</template>

<style lang="scss" scoped>
.product-quantity {
	display: flex;
	align-items: center;

	.form-control {
		width: 4.6rem;
		height: 4.6rem;
		text-align: center;
		background: rgba(255, 255, 255, 0.7);
		border-radius: 0.7rem;
	}

	.btn-quantity {
		position: relative;
		width: 4.6rem;
		height: 4.6rem;
		background: transparent;
		border: none;

		&.minus {
			&::before {
				content: "";
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				width: 1.2rem;
				border-bottom: 0.2rem solid rgba(0, 40, 79, 0.4);
			}
		}

		&.plus {
			&::before {
				content: "";
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				width: 1.2rem;
				border-bottom: 0.2rem solid rgba(0, 40, 79, 0.4);
			}

			&::after {
				content: "";
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				height: 1.2rem;
				border-right: 0.2rem solid rgba(0, 40, 79, 0.4);
			}
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
}
</style>
