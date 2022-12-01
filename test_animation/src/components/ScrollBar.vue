<template>
    <vue-custom-scrollbar
        class="scroll-area"
        :settings="scrollSettings"
        :style="{ height: height + 'px' }">
        <slot />
    </vue-custom-scrollbar>
</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar';
import 'vue-custom-scrollbar/dist/vueScrollbar.css';

export default {
    components: {
        vueCustomScrollbar,
    },
    props: {
        scrollSettings: {
            type: Object,
            default: () => ({}),
        },
        height: {
            type: String,
            default: '400px',
        },
    },
};
</script>

<style lang="scss" scoped>
.scroll-area {
    position: relative;
}
</style>

<style lang="scss">
.scroll-area {
    .ps__rail-y {
        opacity: 1;
        width: 2px;
        background: rgba(229, 255, 255, 0.07);

        .ps__thumb-y {
            right: 0;
            width: 2px;
            background: #2bd9d9;
        }
    }
}
</style>
