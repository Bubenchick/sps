import { watch } from 'vue'
import { defineStore } from 'pinia'
import { setupI18n } from '@/i18n'
import { useStorage } from '@vueuse/core'

const LANG_STORE_NAME = 'user-lang'

export type AvailableLangs = 'en' | 'ru'

export const useLanguageStore = defineStore(LANG_STORE_NAME, () => {
  const language = useStorage<AvailableLangs>(LANG_STORE_NAME, 'en')

  function syncI18n(i18n: ReturnType<typeof setupI18n>) {
    i18n.global.locale.value = language.value
    document.documentElement.lang = language.value

    watch(language, (newLang) => {
      i18n.global.locale.value = newLang
      document.documentElement.lang = newLang
    })
  }

  return { language, syncI18n }
})
