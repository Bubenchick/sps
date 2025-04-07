<template>
  <header class="the-header">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="40" height="40" />

    <nav class="the-header__nav">
      <!-- <RouterLink :to="localePath('home')">{{ t('nav.home') }}</RouterLink> -->

      <RouterLink
        v-for="(link, index) in navLinks"
        :key="index"
        :to="link.path"
        class="the-header__link"
        active-class="the-header__link--active"
      >
        {{ t(link.label) }}
      </RouterLink>
    </nav>

    <LanguageSwitcher class="the-header__language-switcher" />
  </header>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import LanguageSwitcher from './LanguageSwitcher.vue'
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
.the-header {
  align-items: center;
  display: flex;
  gap: 24px;
  padding: 12px;
}

.the-header__nav {
  display: flex;
  gap: 12px;
}

.the-header__link {
  font-size: 19px;
  color: #32495d;
}

.the-header__link:hover {
  color: #15b886;
}

.the-header__link--active {
  border-bottom: 2px solid #15b886;
  color: #15b886;
}

.the-header__language-switcher {
  margin-left: auto;
}
</style>
