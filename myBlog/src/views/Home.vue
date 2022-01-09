<template>
	<div>
		<SectionTicker>
			<Marquee :text="'<span>we build magic</span><strong><span>we build magic</span></strong>'" :duration="30" />
		</SectionTicker>
		<SectionMosaic />
	</div>
</template>

<script>
import Marquee from "@/components/Marquee/Marquee.vue";
import SectionTicker from "@/components/SectionTicker/SectionTicker.vue";
import SectionMosaic from "@/components/SectionMosaic/SectionMosaic.vue";

export default {
	components: {
		Marquee,
		SectionTicker,
		SectionMosaic
	}
};
</script>
