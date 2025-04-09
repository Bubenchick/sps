<template>
  <div class="language-switcher">
    <BaseButton
      v-for="{ lang, label } in LANGS"
      :key="lang"
      :kind="langStore.language === lang ? 'primary' : 'ghost'"
      @click="switchLang(lang)"
    >
      {{ label }}
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
  import { useRouter, useRoute } from 'vue-router';
  import { useLanguageStore, type AvailableLangs } from '@/stores/useLanguageStore';
  import BaseButton from '@/components/ui/BaseButton.vue';
  import { getLocalizedPath } from '@/utils/getLocalizedPath';

  const LANGS: { lang: AvailableLangs; label: string }[] = [
    { lang: 'en', label: '🇺🇸' },
    { lang: 'ru', label: '🇷🇺' },
  ];

  const router = useRouter();
  const route = useRoute();
  const langStore = useLanguageStore();

  const switchLang = (newLang: AvailableLangs) => {
    if (newLang === langStore.language) {
      return;
    }

    langStore.language = newLang;
    const newPath = getLocalizedPath(route.fullPath);
    router.push(newPath);
  };
</script>

<style scoped>
  .language-switcher {
    display: flex;
    gap: 8px;
  }
</style>
