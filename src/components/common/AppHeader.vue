<template>
  <header class="app-header">
    <img alt="logo" src="@/assets/logo.svg" width="40" height="40" />

    <AppNavigation />

    <LanguageSwitcher class="app-header__language-switcher" />
  </header>
</template>

<script lang="ts" setup>
import AppNavigation from './AppNavigation.vue'
import LanguageSwitcher from './LanguageSwitcher.vue'
</script>

<style scoped>
.app-header {
  align-items: center;
  display: flex;
  gap: 24px;
  padding: 12px;
}

.app-header__language-switcher {
  margin-left: auto;
}
</style>
