<script setup>
import { useUserStore } from "@/stores/user";
import Header from "@/components/layout/Header.vue";
import Sidebar from "@/components/layout/Sidebar.vue";

const store = useUserStore();
</script>

<template>
  <!-- <n-spin size="small"  /> -->

  <n-layout>
    <Header :store="store" />
    <div class="container">
      <Sidebar class="sidebar" :store="store" />
      <div class="content-holder">
        <router-view></router-view>
      </div>
    </div>
  </n-layout>
</template>

<style scoped>
.sidebar {
  flex-shrink: 0;
  width: 200px;
}

.container {
  display: flex;
  padding-top: 30px;
}

.container .content-holder {
  padding: 0 30px;
  flex-grow: 1;
}
</style>
