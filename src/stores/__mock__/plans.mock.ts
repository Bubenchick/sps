import type { PricingPlan } from '../usePlansStore'

const plan = (id: string, featuresCount: number, extra = {}): PricingPlan => {
  const prefix = `pricing.plans.${id}`

  return {
    id,
    name: `${prefix}.title`,
    price: `${prefix}.price`,
    amount: `${prefix}.amount`,
    description: `${prefix}.description`,
    features: Array.from({ length: featuresCount }, (_, i) => `${prefix}.features.feature${i + 1}`),
    ...extra,
  }
}

export const mockPlans: PricingPlan[] = [
  plan('free', 3),
  plan('basic', 4),
  plan('advanced', 3, { additionalInfo: 'pricing.plans.advanced.additionalInfo' }),
]
