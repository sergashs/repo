<template>
    <router-view />
</template>

<script>
export default {
    name: 'App',
};
</script>

<style lang="scss">
@import './assets/normalize.css';

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
body {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-size: 16px;
    line-height: 18px;
    font-weight: 600;
    height: 100%;
}
</style>
