<template>
  <footer class="app-footer">
    <img
      alt="logo"
      src="@/assets/logo.svg"
      width="40"
      height="40"
    />

    <BaseText>Super Puper Service© 2025</BaseText>

    <AppNavigation />
  </footer>
</template>

<script lang="ts" setup>
  import AppNavigation from './AppNavigation.vue';
  import BaseText from '../ui/BaseText.vue';
</script>

<style scoped>
  .app-footer {
    align-items: center;
    background-color: var(--color-surface);
    display: flex;
    justify-content: space-between;
    padding: 12px 24px;
  }

  @media (max-width: 768px) {
    .app-footer {
      flex-direction: column-reverse;
      gap: 24px;
      padding: 24px;
    }
  }
</style>
