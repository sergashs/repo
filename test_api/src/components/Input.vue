<template>
	<div class="w-full">
		<input type="text" :placeholder="input.placeholder" :value="modelValue" @input="onInput" class="h-10 rounded border p-2 text-sm w-full" />
	</div>
</template>

<script>
export default {
	props: {
		input: {
			type: Object,
			default: () => ({})
		},
		modelValue: {
			type: [String, Number],
			default: ""
		}
	},
	data() {
		return {
			value: ""
		};
	},
	methods: {
		onInput(event) {
			this.$emit("update:modelValue", event.target.value);
		}
	}
};
</script>
