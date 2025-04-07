<template>
  <footer class="app-footer">
    <img alt="logo" src="@/assets/logo.svg" width="40" height="40" />

    <AppNavigation />
  </footer>
</template>

<script lang="ts" setup>
import AppNavigation from './AppNavigation.vue'
</script>

<style scoped>
.app-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
}
</style>
