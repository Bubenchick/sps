import { defineStore } from 'pinia';
import { ref } from 'vue';
import { mockPlans } from './__mock__/plans.mock';

export interface PricingPlan {
  id: string;
  name: string;
  amount: string;
  price: string;
  description: string;
  features: string[];
  additionalInfo?: string;
}

export const usePlansStore = defineStore('plans', () => {
  const plans = ref<PricingPlan[]>([]);
  const loading = ref(false);

  const fetchPlans = async () => {
    if (plans.value.length) {
      return;
    }

    loading.value = true;

    // Иммитируем задержку запроса, таймаут в 0 потому что нет скелета и скачет, надо добавить скелет
    await new Promise((r) => setTimeout(r, 0));

    plans.value = mockPlans;
    loading.value = false;
  };

  return { plans, loading, fetchPlans };
});
