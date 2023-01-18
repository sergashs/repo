<template>
	<div>
		<Header />
		Some default layout shared across all pages <br />
		<slot />
	</div>
</template>

<script setup>
import Header from "@/components/layout/Header";
</script>
