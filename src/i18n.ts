import { createI18n } from 'vue-i18n'
import EN from '@/locales/en.json'
import RU from '@/locales/ru.json'
import { useLangStore } from '@/stores/lang'

const FALLBACK_LOCALE = 'en'

export const setupI18n = () => {
  const langStore = useLangStore()

  return createI18n({
    legacy: false,
    globalInjection: true,
    locale: langStore.language,
    FALLBACK_LOCALE,
    messages: {
      en: EN,
      ru: RU,
    },
  })
}
