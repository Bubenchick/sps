<template>
  <component
    :is="tag"
    :to="isRouterLink ? to : undefined"
    :href="isExternalLink ? href : undefined"
    :target="isExternalLink ? '_blank' : undefined"
    :class="[
      'base-button',
      `base-button--${props.size}`,
      `base-button--${props.kind}`,
      { 'base-button--block': props.block },
    ]"
    :type="tag === 'button' ? props.type : undefined"
    :disabled="tag === 'button' ? props.disabled : undefined"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

interface IProps {
  href?: string
  to?: string
  block?: boolean
  disabled?: boolean
  kind?: 'primary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<IProps>(), {
  block: false,
  disabled: false,
  kind: 'primary',
  size: 'md',
  type: 'button',
})

const isRouterLink = computed(() => props.to != null)

const isExternalLink = computed(() => props.href != null)

const tag = computed(() => {
  if (isRouterLink.value) return 'RouterLink'
  if (isExternalLink.value) return 'a'
  return 'button'
})
</script>

<style scoped>
.base-button {
  appearance: none;
  border-radius: 8px;
  border: 1px solid transparent;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  outline: none;
  padding: 0 12px;
  transition: all 0.3s ease-in-out;
}

.base-button--block {
  width: 100%;
}

.base-button--primary {
  background-color: #2196f3;
  color: #e3f2fd;
}

.base-button--primary:hover {
  background-color: #82b1ff;
}

.base-button--ghost {
  background-color: #ffffff;
  border: 1px solid #eceff1;
  color: #263238;
}

.base-button--ghost:hover {
  background-color: #eceff1;
}

.base-button--sm {
  font-size: 14px;
  height: 32px;
  min-width: 32px;
}

.base-button--md {
  font-size: 16px;
  height: 40px;
  min-width: 60px;
}

.base-button--lg {
  font-size: 18px;
  height: 48px;
  min-width: 80px;
}
</style>
