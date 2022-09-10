<template>
	<transition>
		<div class="wrapper">
			<main class="main">
				<nuxt />
			</main>
		</div>
	</transition>
</template>

<script>
import globalBreakpoints from "@/mixins/globalBreakpoints";

export default {
	components: {},
	mixins: [globalBreakpoints]
};
</script>
