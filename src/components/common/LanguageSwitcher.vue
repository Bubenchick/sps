<!-- TODO надо свитчер сделать -->
<template>
  <div class="language-switcher">
    <BaseButton
      v-for="lang in langs"
      :key="lang.code"
      :kind="langStore.language === lang.code ? 'primary' : 'ghost'"
      @click="setLanguage(lang.code)"
    >
      {{ lang.label }}
    </BaseButton>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { useLangStore, type AvailableLangs } from '@/stores/lang'
import BaseButton from '../ui/BaseButton.vue'

const { locale } = useI18n()
const langStore = useLangStore()

// TODO что-то с немингами делаем по-человечески ага
const langs: { code: AvailableLangs; label: string }[] = [
  { code: 'ru', label: '🇷🇺' },
  { code: 'en', label: '🇺🇸' },
]

function setLanguage(lang: AvailableLangs) {
  if (langStore.language !== lang) {
    langStore.setLanguage(lang)
    locale.value = lang
  }
}
</script>

<style scoped>
.language-switcher {
  display: flex;
  gap: 8px;
}
</style>
