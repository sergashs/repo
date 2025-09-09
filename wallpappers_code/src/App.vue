<script setup>
import { ref, onMounted, watch } from "vue";
import Header from "@/components/layout/Header.vue";
import Sidebar from "@/components/layout/Sidebar.vue";
import { darkTheme } from "naive-ui";

const isDark = ref(false);

onMounted(() => {
  const saved = localStorage.getItem("theme");
  if (saved) {
    isDark.value = saved === "dark";
  } else {
    isDark.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
});

watch(isDark, (val) => {
  localStorage.setItem("theme", val ? "dark" : "light");
});
</script>

<template>
  <n-config-provider :theme="isDark ? darkTheme : null">
    <n-layout style="min-height: 100vh">
      <n-space justify="end" style="padding: 20px">
        <n-switch v-model:value="isDark" size="large">
          <template #checked>🌙</template>
          <template #unchecked>☀️</template>
        </n-switch>
      </n-space>

      <Header />
      <Sidebar class="sidebar" />
      <div class="content-holder">
        <router-view></router-view>
      </div>
    </n-layout>
  </n-config-provider>
</template>

<style scoped></style>
