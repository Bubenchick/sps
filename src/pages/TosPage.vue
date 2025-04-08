<template>
  <div class="tos">
    <section v-html="md"></section>
  </div>
</template>

<script setup lang="ts">
import { useMarkdownTos } from '@/composables/useMarkdownTos'

const { md } = useMarkdownTos()
</script>

<style scoped>
.tos {
  max-width: 720px;
  margin: 0 auto;
  padding: 32px;
  font-size: 16px;
}
</style>
