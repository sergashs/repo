<template>
  <div>
    <SectionTicker>
      <marquee>
        <template v-slot:text>
          <span>i build magic</span><strong><span>i build magic</span></strong>
        </template>
      </marquee>
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
import Marquee from '@/components/Marquee.vue'
import SectionTicker from '@/components/SectionTicker.vue'
import SectionSwiper from '@/components/SectionSwiper.vue'
import SectionMosaic from '@/components//SectionMosaic.vue'
import SectionReviews from '@/components/SectionReviews.vue'
import SectionGallery from '@/components/SectionGallery.vue'
import MultiplyMarquee from '@/components/MultiplyMarquee.vue'
import SectionContact from '@/components/SectionContact.vue'

export default {
  name: 'IndexPage',
  components: {
    Marquee,
    SectionTicker,
    SectionSwiper,
    SectionMosaic,
    SectionReviews,
    SectionGallery,
    MultiplyMarquee,
    SectionContact,
  },
}
</script>
