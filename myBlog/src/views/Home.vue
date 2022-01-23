<template>
	<div>
		<SectionTicker>
			<Marquee :text="'<span>i build magic</span><strong><span>i build magic</span></strong>'" :duration="30" />
		</SectionTicker>
		<SectionMosaic />
		<SectionSwiper />
	</div>
</template>

<script>
import Marquee from "@/components/Marquee/Marquee.vue";
import SectionTicker from "@/components/SectionTicker/SectionTicker.vue";
import SectionMosaic from "@/components/SectionMosaic/SectionMosaic.vue";
import SectionSwiper from "@/components/SectionSwiper/SectionSwiper.vue";

export default {
	components: {
		Marquee,
		SectionTicker,
		SectionMosaic,
		SectionSwiper
	}
};
</script>
