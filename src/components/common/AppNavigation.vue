<template>
  <nav class="app-navigation">
    <RouterLink
      v-for="(link, index) in NAV_LINKS"
      :key="index"
      :to="getLocalizedPath(link.path)"
      class="app-navigation__link"
      active-class="app-navigation__link--active"
    >
      {{ t(link.label) }}
    </RouterLink>
  </nav>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { getLocalizedPath } from '@/utils/getLocalizedPath'

const NAV_LINKS = [
  { path: '/', label: 'nav.home' },
  { path: '/tos', label: 'nav.terms' },
  { path: '/order', label: 'nav.order' },
]

const { t } = useI18n()
</script>

<style scoped>
.app-navigation {
  display: flex;
  gap: 12px;
  /* TODO убрать если сделаю бургер */
  overflow-y: auto;
}

.app-navigation__link {
  color: var(--color-text-primary);
  font-size: 16px;
  /* TODO убрать если сделаю бургер */
  white-space: nowrap;
}

.app-navigation__link:hover {
  color: var(--color-text-accent);
}

.app-navigation__link--active {
  border-bottom: 2px solid var(--color-text-accent);
  color: var(--color-text-accent);
}
</style>
