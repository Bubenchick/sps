<template>
  <h1>{{ t('home.title') }}</h1>

  <ServiceHero background="/images/bg-hero.jpg">
    <template #title>
      <BaseTitle size="h1" kind="primary">
        {{ t('home.heroTitle') }}
      </BaseTitle>
    </template>

    <template #content>
      <BaseText>
        {{ t('home.heroDescription') }}
      </BaseText>
    </template>

    <template #action>
      <BaseButton @click="scrollTo('features')">{{ t('home.cta') }}</BaseButton>
    </template>
  </ServiceHero>

  <div style="height: 900px; background-color: salmon"></div>

  <div id="features">sdlsgsdlkgjsdgklsdjgk</div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import BaseText from '@/components/ui/BaseText.vue'
import BaseTitle from '@/components/ui/BaseTitle.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import ServiceHero from '@/components/ServiceHero/ServiceHero.vue'

const { t } = useI18n()

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
