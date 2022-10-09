<template>
	<div class="marquee-section">
		<marquee-text :duration="duration">{{ text }}</marquee-text>
	</div>
</template>

<script>
import MarqueeText from "vue-marquee-text-component";

export default {
	components: {
		MarqueeText
	},
	props: {
		text: {
			type: String,
			default: ""
		},

		duration: {
			type: Number,
			default: 10
		}
	}
};
</script>

<style lang="scss">
.marquee-section {
	.marquee-text-wrap {
		font-size: 5.2rem;
		-webkit-text-stroke: 0.1rem rgba(#373737, 0.2);
		-webkit-text-fill-color: #bebebe;
	}
}
</style>
