import type { PricingPlan } from './types'

const prefixFree = 'pricing.plans.free'
const prefixBasic = 'pricing.plans.basic'
const prefixAdvanced = 'pricing.plans.advanced'

export const plans: PricingPlan[] = [
  {
    id: 'free',
    name: `${prefixFree}.title`,
    price: `${prefixFree}.price`,
    amount: `${prefixFree}.amount`,
    description: `${prefixFree}.description`,
    features: [
      `${prefixFree}.features.feature1`,
      `${prefixFree}.features.feature2`,
      `${prefixFree}.features.feature3`,
    ],
  },
  {
    id: 'basic',
    name: `${prefixBasic}.title`,
    price: `${prefixBasic}.price`,
    amount: `${prefixBasic}.amount`,
    description: `${prefixBasic}.description`,
    features: [
      `${prefixBasic}.features.feature1`,
      `${prefixBasic}.features.feature2`,
      `${prefixBasic}.features.feature3`,
      `${prefixBasic}.features.feature4`,
    ],
  },
  {
    id: 'advanced',
    name: `${prefixAdvanced}.title`,
    price: `${prefixAdvanced}.price`,
    amount: `${prefixAdvanced}.amount`,
    description: `${prefixAdvanced}.description`,
    features: [
      `${prefixAdvanced}.features.feature1`,
      `${prefixAdvanced}.features.feature2`,
      `${prefixAdvanced}.features.feature3`,
    ],
    additionalInfo: `${prefixAdvanced}.additionalInfo`,
  },
]
