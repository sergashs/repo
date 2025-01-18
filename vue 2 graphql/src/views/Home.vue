<template>
    <div class="time-page page">
        <template v-if="loading"> loading </template>
        <template v-else> {{ data }} </template>
        <br />
        <input type="text" v-model="id" />
        <button @click="test">test1</button>
    </div>
</template>

<script>
// import axios from 'axios';
import APIQl from '@/api/testql';

export default {
    name: 'Home',
    data() {
        return {
            data: null,
            id: 1,
            loading: false,
        };
    },
    methods: {
        test() {
            this.loading = true;

            APIQl.getTest(`{ user(id: ${this.id}){ id name } }`)
                .then((response) => {
                    console.log(response.data);
                    this.data = response.data;
                })
                .finally(() => {
                    this.loading = false;
                    console.log('finaly');
                });
        },
    },
};
</script>

<style scoped lang="scss"></style>
