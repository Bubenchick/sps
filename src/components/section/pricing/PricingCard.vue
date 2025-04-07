<template>
  <div class="pricing-card">
    <BaseTitle align="center">{{ t(card.name) }}</BaseTitle>

    <BaseText size="lg" kind="accent" align="center">{{ t(card.price) }}</BaseText>

    <BaseText>{{ t(card.description) }}</BaseText>

    <div class="pricing-card__features">
      <BaseText v-for="(feature, index) in card.features" :key="index" kind="secondary" size="sm">
        - {{ t(feature) }}
      </BaseText>
    </div>

    <BaseText v-if="card.additionalInfo" size="sm" kind="helper">
      {{ t(card.additionalInfo) }}
    </BaseText>

    <BaseButton class="pricing-card__action" block> {{ t(card.actionText) }} </BaseButton>
  </div>
</template>

<script lang="ts" setup>
import BaseButton from '@/components/ui/BaseButton.vue'
import { useI18n } from 'vue-i18n'
import type { PricingCard } from './types'
import BaseTitle from '@/components/ui/BaseTitle.vue'
import BaseText from '@/components/ui/BaseText.vue'

const { t } = useI18n()

defineProps<{ card: PricingCard }>()
</script>

<style scoped>
.pricing-card {
  /* TODO sizes */
  width: 300px;
  height: 440px;

  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 24px;

  display: flex;
  flex-direction: column;
  gap: 16px;
  transition:
    box-shadow 0.3s ease-in-out,
    transform 0.3s ease-in-out;
}

.pricing-card:hover {
  box-shadow: 0 0 16px rgba(66, 184, 131, 0.6);
  transform: translateY(-4px);
}

.pricing-card__features {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.pricing-card__action {
  margin-top: auto;
}
</style>
