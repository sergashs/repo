<script setup>
const props = defineProps(["store"]);
</script>

<template>
  <div class="site-sidebar">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li v-if="store.user.uid">
        <router-link :to="`/user/${store.user.uid}`">My page</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

ul a {
  display: block;
  width: 100%;
  padding: 5px 8px;
  font-size: 15px;
  color: black;
  text-decoration: none;
  border-radius: 4px;
}

ul a:hover {
  background: #cfdbed;
}

a.router-link-exact-active {
  background: #cfdbed;
}
</style>
