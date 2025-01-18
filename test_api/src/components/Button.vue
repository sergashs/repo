<template>
	<button class="rounded h-10 px-4 bg-red-400 text-white disabled:opacity-75 disabled:bg-gray-500 disabled:pointer-events-none" :disabled="button.disabled">
		{{ button.title }}
	</button>
</template>

<script>
export default {
	props: {
		button: {
			type: Object,
			default: () => ({
				disabled: false
			})
		}
	}
};
</script>
