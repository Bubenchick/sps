<template>
  <footer class="app-footer">
    <img alt="logo" src="@/assets/logo.svg" width="40" height="40" />

    <div style="display: flex; align-items: center; justify-content: space-between; width: 300px">
      <IconCommunity />
      <IconDocumentation />
      <IconEcosystem />
      <IconSupport />
      <IconTooling />
    </div>

    <AppNavigation />
  </footer>
</template>

<script lang="ts" setup>
import AppNavigation from './AppNavigation.vue'

import IconCommunity from '@/components/icons/IconCommunity.vue'
import IconDocumentation from '@/components/icons/IconDocumentation.vue'
import IconEcosystem from '@/components/icons/IconEcosystem.vue'
import IconSupport from '@/components/icons/IconSupport.vue'
import IconTooling from '@/components/icons/IconTooling.vue'
</script>

<style scoped>
.app-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  background-color: var(--color-surface);
}
</style>
