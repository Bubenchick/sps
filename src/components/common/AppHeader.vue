<template>
  <header class="app-header">
    <img
      alt="logo"
      src="@/assets/logo.svg"
      width="40"
      height="40"
    />

    <AppNavigation />

    <LanguageSwitcher class="app-header__language-switcher" />
  </header>
</template>

<script lang="ts" setup>
  import AppNavigation from './AppNavigation.vue';
  import LanguageSwitcher from './LanguageSwitcher.vue';
</script>

<style scoped>
  .app-header {
    align-items: center;
    background-color: var(--color-surface);
    display: flex;
    gap: 24px;
    padding: 12px 24px;
    position: sticky;
    top: 0;
    z-index: 1000;
  }

  .app-header__language-switcher {
    margin-left: auto;
  }
</style>
