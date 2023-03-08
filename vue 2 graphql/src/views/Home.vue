<template>
    <div class="time-page page">
        {{ data }} <br />
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
        };
    },
    methods: {
        test() {
            APIQl.getTest(`{ user(id: ${this.id}){ id name } }`).then((response) => {
                console.log(response);
                this.data = response.data;
            });
        },
    },
};
</script>

<style scoped lang="scss"></style>
