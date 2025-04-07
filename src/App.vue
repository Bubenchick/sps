<template>
  <TheHeader />

  <RouterView />

  <TheFooter />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from '@/components/common/TheHeader.vue'
import TheFooter from '@/components/common/TheFooter.vue'
</script>

<style scoped></style>
