<template>
  <AppHeader />

  <!-- TODO remove wrap later -->
  <main class="app-main">
    <RouterView />
  </main>

  <AppFooter />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/common/AppHeader.vue'
import AppFooter from '@/components/common/AppFooter.vue'
</script>

<style scoped>
.app-main {
  flex: 1;
  padding: 12px;
}
</style>
