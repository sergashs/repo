<script setup>
import { useUserStore } from "@/stores/user";

const { user } = useUserStore();
</script>

<template>
  <div>
    <n-avatar :size="48" :src="user.photoURL" />
    <h3>{{ user.displayName }}</h3>
  </div>
</template>
