<template>
  <div class="tos-page">
    <section v-html="md"></section>
  </div>
</template>

<script setup lang="ts">
import { useMarkdownTos } from '@/composables/useMarkdownTos'

const { md } = useMarkdownTos()
</script>

<style scoped>
.tos-page {
  margin: 0 auto;
  max-width: 720px;
  padding: 32px;
}
</style>
