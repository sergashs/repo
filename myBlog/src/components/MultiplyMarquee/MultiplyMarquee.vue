<template>
	<div class="multiply-marquee">
		<div class="marquees">
			<Marquee :text="'<span>we urban </span><strong><span>we</span></strong><span>interior</span>'" :duration="30" />
			<Marquee :text="'<span>estrutural</span><strong><span>are</span></strong><span>living ae</span>'" :duration="30" :direction="'reverse'" />
			<Marquee :text="'<span>rustic</span><strong><span>about</span></strong><span>futuristic</span>'" :duration="30" />
			<Marquee :text="'<span>natural</span><strong><span>arch</span></strong><span>modern</span>'" :duration="30" :direction="'reverse'" />
		</div>
		<div class="btn-holder">
			<a href="#" class="btn btn-arrow">
				what our customers say
				<span class="icon-holder">
					<img src="@/assets/images/icon-01.svg" alt="#" />
				</span>
			</a>
		</div>
	</div>
</template>

<script>
import Marquee from "@/components/Marquee/Marquee.vue";

export default {
	name: "MultiplyMarquee",
	components: {
		Marquee
	}
};
</script>

<style lang="scss">
@import "@/components/MultiplyMarquee/MultiplyMarquee.scss";
</style>
