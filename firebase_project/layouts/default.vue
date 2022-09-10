<template>
	<transition>
		<div class="wrapper">
			<Header />
			<main class="main">
				<nuxt />
			</main>
		</div>
	</transition>
</template>

<script>
import globalBreakpoints from "@/mixins/globalBreakpoints";
import Header from "@/components/Header";

export default {
	components: {
		Header
	},
	mixins: [globalBreakpoints]
};
</script>
