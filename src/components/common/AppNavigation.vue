<template>
  <div class="app-navigation">
    <!-- <RouterLink :to="localePath('home')">{{ t('nav.home') }}</RouterLink> -->

    <RouterLink
      v-for="(link, index) in navLinks"
      :key="index"
      :to="link.path"
      class="app-navigation__link"
      active-class="app-navigation__link--active"
    >
      {{ t(link.label) }}
    </RouterLink>
  </div>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const navLinks = [
  { path: '/', label: 'nav.home' },
  { path: '/tos', label: 'nav.terms' },
  { path: '/order', label: 'nav.order' },
]

const { t } = useI18n()

// const localePath = (name: string) => ({ name, params: { lang: locale.value } })
</script>

<style scoped>
.app-navigation {
  display: flex;
  gap: 12px;
}

.app-navigation__link {
  color: #32495d;
  font-size: 19px;
}

.app-navigation__link:hover {
  color: #15b886;
}

.app-navigation__link--active {
  border-bottom: 2px solid #15b886;
  color: #15b886;
}
</style>
