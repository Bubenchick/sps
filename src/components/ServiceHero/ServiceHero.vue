<template>
  <section class="service-hero" :style="{ backgroundImage: bgImageStyle }">
    <div class="service-hero__inner">
      <div class="service-hero__title">
        <slot name="title" />
      </div>

      <div class="service-hero__content">
        <slot name="content" />
      </div>

      <div class="service-hero__action">
        <slot name="action" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  background?: string
}>()

const bgImageStyle = computed(() => (props.background ? `url(${props.background})` : 'none'))
</script>

<style scoped>
.service-hero {
  padding: 64px 24px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-hero__inner {
  max-width: 1024px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.service-hero__title ::v-deep(*) {
  font-size: 2.5rem;
  font-weight: 700;
}

.service-hero__content ::v-deep(*) {
  font-size: 1.25rem;
  color: #5c6b7a;
}

.service-hero__action {
  margin-top: 16px;
}
</style>
