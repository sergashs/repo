<template>
  <div class="wrapper">
    <Header />
    <main class="main">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  name: 'default',
  components: {
    Header,
  },
}
</script>
