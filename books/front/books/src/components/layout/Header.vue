<script setup>
const props = defineProps(["store"]);
</script>

<template>
  <header class="header">
    <div class="container">
      <router-link :to="'/'" class="logo-holder">
        <svg style="width: 24px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96s42.98 96 96 96s96-42.98 96-96zM233.59 241.1c-59.33-36.32-155.43-46.3-203.79-49.05C13.55 191.13 0 203.51 0 219.14v222.8c0 14.33 11.59 26.28 26.49 27.05c43.66 2.29 131.99 10.68 193.04 41.43c9.37 4.72 20.48-1.71 20.48-11.87V252.56c-.01-4.67-2.32-8.95-6.42-11.46zm248.61-49.05c-48.35 2.74-144.46 12.73-203.78 49.05c-4.1 2.51-6.41 6.96-6.41 11.63v245.79c0 10.19 11.14 16.63 20.54 11.9c61.04-30.72 149.32-39.11 192.97-41.4c14.9-.78 26.49-12.73 26.49-27.06V219.14c-.01-15.63-13.56-28.01-29.81-27.09z" fill="currentColor"></path></svg>
        Books
      </router-link>

      <template v-if="!store.user.uid">
        <n-button @click="store.login">Увійти через Google</n-button>
      </template>

      <template v-else>
        <n-button @click="store.logout" type="error">Вийти</n-button>
      </template>
    </div>
  </header>
</template>

<style scoped>
.header {
  padding: 20px 0;
  color: white;
  background: black;
}

.header a {
  color: white;
}

.header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header .logo-holder {
  display: inline-flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: 500;
  text-decoration: none;
}

.header .logo-holder svg {
  margin-right: 15px;
}
</style>
