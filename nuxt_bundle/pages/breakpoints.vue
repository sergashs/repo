<template>
	<div class="breakpoints">
		<div class="container">
			<div v-if="up_md">up_md</div>
			<div v-if="up_lg">up_lg</div>
		</div>
	</div>
</template>

<script>
import getterBreakpoints from "@/mixins/getterBreakpoints";

export default {
	name: "Breakpoints",
	mixins: [getterBreakpoints]
};
</script>
