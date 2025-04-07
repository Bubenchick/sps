<!-- Если на других страницах тоже будет HERO можно переделать на слоты -->
<template>
  <section class="hero-section">
    <BaseTitle size="h1" kind="primary">
      {{ t('home.heroTitle') }}
    </BaseTitle>

    <!-- TODO убрать хардкод N -->
    <BaseText v-for="n in 2" :key="n" size="lg" kind="secondary">
      {{ t(`home.heroDescription.paragraph${n}`) }}
    </BaseText>

    <BaseButton @click="scrollTo('pricing')">{{ t('home.heroCta') }}</BaseButton>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import BaseText from '@/components/ui/BaseText.vue'
import BaseTitle from '@/components/ui/BaseTitle.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import scrollTo from '@/utils/scrollTo'

const { t } = useI18n()
</script>

<style scoped>
.hero-section {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  height: calc(100vh - 64px);
  padding: 24px;
}
</style>
