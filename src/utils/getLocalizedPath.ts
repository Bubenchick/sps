import { useLanguageStore } from '@/stores/useLanguage'

// TODO подумать и мб вернуть
// export function getLocalizedPath(path: string, lang: AvailableLangs): string {
//   const cleanPath = path.replace(/^\/ru/, '') || '/'
//   return lang === 'en' ? cleanPath : `/ru${cleanPath}`
// }

export const getLocalizedPath = (path: string) => {
  const lang = useLanguageStore().language

  if (lang === 'ru' && !path.startsWith('/ru')) {
    return `/ru${path}`
  } else if (lang === 'en' && path.startsWith('/ru')) {
    return path.replace(/^\/ru/, '')
  }
  return path
}
