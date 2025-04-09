import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useLanguageStore } from '@/stores/useLanguageStore'
import { getLocalizedPath } from '@/utils/getLocalizedPath'

describe('getLocalizedPath', () => {
  beforeEach(() => {
    vi.mock('@/stores/useLanguageStore', () => ({
      useLanguageStore: vi.fn().mockReturnValue({
        language: 'en',
      }),
    }))
  })

  it('должен добавлять /ru в путь, если язык русский и префикса /ru нет', () => {
    useLanguageStore().language = 'ru'

    const result = getLocalizedPath('/home')
    expect(result).toBe('/ru/home')
  })

  it('должен удалять /ru из пути, если язык английский и префикс /ru есть', () => {
    useLanguageStore().language = 'en'

    const result = getLocalizedPath('/ru/home')
    expect(result).toBe('/home')
  })

  it('не должен изменять путь, если язык русский и путь уже начинается с /ru', () => {
    useLanguageStore().language = 'ru'

    const result = getLocalizedPath('/ru/home')
    expect(result).toBe('/ru/home')
  })

  it('не должен изменять путь, если язык английский и путь не начинается с /ru', () => {
    useLanguageStore().language = 'en'

    const result = getLocalizedPath('/home')
    expect(result).toBe('/home')
  })
})
