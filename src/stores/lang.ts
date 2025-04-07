import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export type AvailableLangs = 'ru' | 'en'

export const useLangStore = defineStore('lang', () => {
  const language = useStorage<AvailableLangs>('user-lang', 'en')

  function setLanguage(lang: AvailableLangs) {
    language.value = lang
  }

  return {
    language,
    setLanguage,
  }
})
