import type { PricingCard } from './types'

export const plans: PricingCard[] = [
  {
    id: 'free',
    name: 'pricing.plans.free.title',
    price: 'pricing.plans.free.price',
    description: 'pricing.plans.free.description',
    features: [
      'pricing.plans.free.features.feature1',
      'pricing.plans.free.features.feature2',
      'pricing.plans.free.features.feature3',
    ],
    actionText: 'pricing.orderButton',
  },
  {
    id: 'basic',
    name: 'pricing.plans.basic.title',
    price: 'pricing.plans.basic.price',
    description: 'pricing.plans.basic.description',
    features: [
      'pricing.plans.basic.features.feature1',
      'pricing.plans.basic.features.feature2',
      'pricing.plans.basic.features.feature3',
    ],
    actionText: 'pricing.orderButton',
  },
  {
    id: 'advanced',
    name: 'pricing.plans.advanced.title',
    price: 'pricing.plans.advanced.price',
    description: 'pricing.plans.advanced.description',
    features: [
      'pricing.plans.advanced.features.feature1',
      'pricing.plans.advanced.features.feature2',
      'pricing.plans.advanced.features.feature3',
      'pricing.plans.advanced.features.feature4',
    ],
    additionalInfo: 'pricing.plans.advanced.additionalInfo',
    actionText: 'pricing.orderButton',
  },
]
