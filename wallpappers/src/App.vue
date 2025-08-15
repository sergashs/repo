<script setup>
import Header from "@/components/layout/Header.vue";
import Sidebar from "@/components/layout/Sidebar.vue";
</script>

<template>
  <!-- <n-spin size="small"  /> -->

  <n-layout>
    <Header :store="store" />

    <Sidebar class="sidebar" :store="store" />
    <div class="content-holder">
      <router-view></router-view>
    </div>
  </n-layout>
</template>

<style scoped></style>
