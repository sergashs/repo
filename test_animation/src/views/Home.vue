<template>
    <div class="home-page">
        <AnimationPanel />
    </div>
</template>

<script>
import AnimationPanel from '@/components/AnimationPanel';

export default {
    name: 'Home',
    components: {
        AnimationPanel,
    },
};
</script>

<style scoped lang="scss">
.home-page {
    background: url('../assets/images/bg.jpg') no-repeat;
    background-size: cover;
    min-height: 100vh;
}
</style>
