<template>
	<vue3-marquee :clone="true" :duration="duration">
		<p v-html="text"></p>
	</vue3-marquee>
</template>

<script>
import Vue3Marquee from "vue3-marquee";

export default {
	name: "Marquee",
	props: {
		text: {
			type: String
		},
		duration: {
			type: Number
		}
	},
	components: {
		Vue3Marquee
	}
};
</script>

<style lang="scss">
@import "@/components/Marquee/Marquee.scss";
</style>
