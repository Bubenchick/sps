export interface PricingCard {
  id: string
  name: string
  price: string
  description: string
  features: string[]
  actionText: string
  additionalInfo?: string
  highlight?: boolean
}
