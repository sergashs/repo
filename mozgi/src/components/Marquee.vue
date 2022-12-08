<template>
	<div class="marquee">
		<marquee-text :reverse="settings.reverse" :repeat="settings.repeat" :duration="settings.duration">{{ text }}</marquee-text>
	</div>
</template>

<script>
import MarqueeText from "vue-marquee-text-component";

export default {
	props: {
		text: {
			type: String,
			default: "text..."
		},
		settings: {
			type: Object,
			default: () => ({})
		}
	},
	components: {
		MarqueeText
	}
};
</script>

<style lang="scss" scoped>
.marquee {
	font-weight: 700;
	font-size: 52px;
	color: transparent;
	-webkit-text-stroke-width: 1px;
	-webkit-text-stroke-color: #373737;
	opacity: 0.1;

	@media (max-width: 1024px) {
		font-size: 42px;
	}

	@media (max-width: 575px) {
		font-size: 28px;
	}
}
</style>

<style lang="scss">
.marquee {
	.marquee-text-content {
		display: flex;
		white-space: nowrap;
		width: 100%;
	}
}
</style>
