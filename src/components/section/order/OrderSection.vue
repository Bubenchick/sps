<template>
  <section class="order-section">
    <BaseTitle size="h1">{{ t('order.selectPlan') }}</BaseTitle>

    <div class="order-section__cards">
      <!-- TODO loader -->
      <BaseText v-if="plansStore.loading">Loading...</BaseText>

      <PricingCard
        v-else
        v-for="plan in plansStore.plans"
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
  import { onMounted } from 'vue';
  import { useI18n } from 'vue-i18n';
  import BaseTitle from '@/components/ui/BaseTitle.vue';
  import BaseText from '@/components/ui/BaseText.vue';
  import PricingCard from '@/components/section/pricing/PricingCard.vue';
  import { useOrderStore } from '@/stores/useOrderStore';
  import { usePlansStore, type PricingPlan } from '@/stores/usePlansStore';
  import OrderForm from './OrderForm.vue';

  const { t } = useI18n();
  const orderStore = useOrderStore();
  const plansStore = usePlansStore();

  onMounted(() => {
    plansStore.fetchPlans();
  });

  const handleClick = (plan: PricingPlan) => orderStore.selectPlan(plan.id);
</script>

<style scoped>
  .order-section {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 32px;
    gap: 24px;
  }

  .order-section__cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;
    padding: 24px;
  }

  @media (max-width: 768px) {
    .order-section__cards {
      padding: 24px 12px;
    }
  }
</style>
