<template>
    <router-view />
</template>

<script>
export default {
    name: 'App',
};
</script>

<style lang="scss">
@import './assets/scss/styles.scss';
@import './assets/normalize.css';

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto:wght@400;500;700&display=swap');

body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 1.2;
    display: flex;
    justify-content: center;
    background: #ebecf0;
}
</style>
