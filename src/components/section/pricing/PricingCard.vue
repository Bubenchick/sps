<!-- TODO разделить на два разных компонента обычный/компактный и перенести в common -->
<template>
  <div
    :class="[
      'pricing-card',
      { 'pricing-card--active': props.active, 'pricing-card--compact': props.compact },
    ]"
  >
    <BaseTitle align="center">{{ t(card.name) }}</BaseTitle>

    <BaseTitle align="center" size="h3" kind="secondary">{{ t(card.amount) }}</BaseTitle>

    <BaseText size="lg" kind="accent" align="center">{{ t(card.price) }}</BaseText>

    <BaseText v-if="!compact">{{ t(card.description) }}</BaseText>

    <div v-if="!compact" class="pricing-card__features">
      <BaseText v-for="(feature, index) in card.features" :key="index" kind="secondary" size="sm">
        - {{ t(feature) }}
      </BaseText>
    </div>

    <BaseText v-if="!compact && card.additionalInfo" size="sm" kind="helper">
      {{ t(card.additionalInfo) }}
    </BaseText>

    <BaseButton
      v-if="!compact"
      :to="getLocalizedPath('/order')"
      class="pricing-card__action"
      block
      @click="handleClick"
    >
      {{ t('pricing.actionButton') }}
    </BaseButton>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseText from '@/components/ui/BaseText.vue'
import BaseTitle from '@/components/ui/BaseTitle.vue'
import { getLocalizedPath } from '@/utils/getLocalizedPath'
import { useOrderStore } from '@/stores/useOrder'
import type { PricingPlan } from './types'

interface IProps {
  card: PricingPlan
  active?: boolean
  compact?: boolean
}

const { t } = useI18n()
const orderStore = useOrderStore()
const props = withDefaults(defineProps<IProps>(), { active: false, compact: false })

const handleClick = () => orderStore.selectPlan(props.card.id)
</script>

<style scoped>
.pricing-card {
  background-color: var(--color-surface);
  border-radius: 16px;
  border: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  width: 300px;
  transition:
    box-shadow 0.3s ease-in-out,
    transform 0.3s ease-in-out;
}

.pricing-card--compact {
  cursor: pointer;
}

.pricing-card--active {
  border-color: var(--color-primary);
  box-shadow: 0 0 12px rgba(66, 184, 131, 0.8);
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
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: auto;
}
</style>
