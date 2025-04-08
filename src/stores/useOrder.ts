import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useOrderStore = defineStore('order', () => {
  const selectedPlanId = useStorage<string | null>('selected-plan', null)

  const selectPlan = (id: string) => (selectedPlanId.value = id)

  return { selectedPlanId, selectPlan }
})
