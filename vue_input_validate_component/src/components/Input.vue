<template>
	<div class="field">
		<div class="p-float-label">
			<InputText :id="label.toLowerCase()" v-model="vObject.$model" :class="{ 'p-invalid': error.invalid && error.submitted }" />
			<label for="name" :class="{ 'p-error': error.invalid && error.submitted }">{{ label }}*</label>
		</div>
		<span v-if="error.error && error.submitted">
			<span :id="`${label.toLowerCase()}-error`" v-for="(error, index) of vObject.$errors" :key="index">
				<small class="p-error">{{ error.$message }}</small>
			</span>
		</span>
		<small v-else-if="(error.invalid && error.submitted) || error.pending" class="p-error">
			{{ vObject.required.$message.replace("Value", `${label}`) }}
		</small>
	</div>
</template>

<script>
export default {
	props: {
		label: {
			type: String,
			default: "labelName"
		},
		vObject: {
			type: Object,
			default: () => {}
		},
		error: {
			type: Object,
			default: () => {}
		}
	}
};
</script>
