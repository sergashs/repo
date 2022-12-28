<template>
	<div>
		<SectionTicker>
			<Marquee :text="'<span>i build magic</span><strong><span>i build magic</span></strong>'" :duration="30" />
		</SectionTicker>
		<SectionMosaic />
		<SectionSwiper />
		<SectionReviews />
		<SectionGallery />
		<MultiplyMarquee />
		<SectionContact />
	</div>
</template>

<script>
import Marquee from "@/components/Marquee/Marquee.vue";
import SectionTicker from "@/components/SectionTicker/SectionTicker.vue";
import SectionMosaic from "@/components/SectionMosaic/SectionMosaic.vue";
import SectionSwiper from "@/components/SectionSwiper/SectionSwiper.vue";
import SectionReviews from "@/components/SectionReviews/SectionReviews.vue";
import SectionGallery from "@/components/SectionGallery/SectionGallery.vue";
import MultiplyMarquee from "@/components/MultiplyMarquee/MultiplyMarquee.vue";
import SectionContact from "@/components/SectionContact/SectionContact.vue";

export default {
	components: {
		Marquee,
		SectionTicker,
		SectionMosaic,
		SectionSwiper,
		SectionReviews,
		SectionGallery,
		MultiplyMarquee,
		SectionContact
	}
};
</script>
