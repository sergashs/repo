<template>
  <header>
    <nav>
      <ul>
        <li><NuxtLink to="/">Home page</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss" scoped>
header {
  color: $mine-shaft;
  background: $alabaster;

  ul {
    background: $celery;
  }
}
</style>
