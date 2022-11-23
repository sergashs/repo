<template>
	<div class="field">
		<div class="field">
			<label v-if="label" for="name" :class="{ 'p-error': error.invalid && error.submitted }">{{ label }}*</label>
			<component :is="componentTag" v-bind="currentProperties" :class="{ 'p-invalid': error.invalid && error.submitted }" v-model="vObject.$model"> </component>
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
			default: ""
		},
		vObject: {
			type: Object,
			default: () => {}
		},
		error: {
			type: Object,
			default: () => {}
		},
		componentTag: {
			type: String,
			default: "InputText"
		},
		customProps: {
			type: Object,
			default: () => {}
		},
		value: {
			type: String,
			default: ""
		}
	},
	computed: {
		currentProperties() {
			return this.customProps;
		}
	}
};
</script>
