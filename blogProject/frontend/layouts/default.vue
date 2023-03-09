<template>
	<div>
		<Header />
		<slot />
	</div>
</template>

<script>
import Header from "@/components/layout/Header";

export default {
	components: {
		Header
	}
};
</script>
