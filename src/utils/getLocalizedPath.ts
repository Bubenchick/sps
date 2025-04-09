import { useLanguageStore } from '@/stores/useLanguageStore';

export const getLocalizedPath = (path: string) => {
  const lang = useLanguageStore().language;

  if (lang === 'ru' && !path.startsWith('/ru')) {
    return `/ru${path}`;
  } else if (lang === 'en' && path.startsWith('/ru')) {
    return path.replace(/^\/ru/, '');
  }
  return path;
};
