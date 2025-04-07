<template>
  <section id="pricing" class="pricing-section">
    <div class="pricing-section__grid">
      <PricingCard v-for="(item, index) in plans" :key="index" :card="item" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import PricingCard from './PricingCard.vue'
import { plans } from './mock'
</script>

<style scoped>
.pricing-section {
  background-image: url('@/assets/images/pricing-bg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: 32px;
  position: relative;
}

.pricing-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(15, 15, 15, 0.85), rgba(0, 0, 0, 0.6));
  z-index: 0;
}

.pricing-section__grid {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  z-index: 100;
}

@media (max-width: 768px) {
  .pricing-section {
    padding: 24px 12px;
  }
}
</style>
