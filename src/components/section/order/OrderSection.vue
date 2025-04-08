<template>
  <section class="order-section">
    <BaseTitle>{{ t('order.selectPlan') }}</BaseTitle>

    <div class="order-section__cards">
      <PricingCard
        v-for="plan in plans"
        :key="plan.id"
        :card="plan"
        :active="orderStore.selectedPlanId === plan.id"
        compact
        @click="handleClick(plan)"
      />
    </div>

    <OrderForm />
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import BaseTitle from '@/components/ui/BaseTitle.vue'
import PricingCard from '@/components/section/pricing/PricingCard.vue'
import { useOrderStore } from '@/stores/useOrder'
import OrderForm from './OrderForm.vue'
import { plans } from '../pricing/plans'
import type { PricingPlan } from '@/components/section/pricing/types'

const { t } = useI18n()
const orderStore = useOrderStore()

const handleClick = (plan: PricingPlan) => orderStore.selectPlan(plan.id)
</script>

<style scoped>
.order-section {
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 32px;
}

.order-section__cards {
  display: flex;
  gap: 24px;
  padding: 24px;
}
</style>
