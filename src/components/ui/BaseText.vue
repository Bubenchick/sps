<template>
  <component
    :is="props.tag"
    :class="[
      'base-text',
      {
        [`base-text--${props.kind}`]: props.kind,
        [`base-text--${props.size}`]: props.size,
      },
    ]"
  >
    <slot name="default"></slot>
  </component>
</template>

<script lang="ts" setup>
type ISize = 'sm' | 'md' | 'lg'
type IKind = 'primary' | 'secondary' | 'helper'

// TODO bold
interface IProps {
  kind?: IKind
  size?: ISize
  tag?: keyof HTMLElementTagNameMap
}

const props = withDefaults(defineProps<IProps>(), {
  kind: 'primary',
  size: 'md',
  tag: 'p',
})
</script>

<style scoped>
.base-text {
  margin: 0;
}

/* TODO line height + letter spacing for all sizes */
.base-text--sm {
  font: var(--typography-text-sm);
}

.base-text--md {
  font: var(--typography-text-md);
}

.base-text--lg {
  font: var(--typography-text-lg);
}

.base-text--primary {
  color: var(--color-text-primary);
}

.base-text--secondary {
  color: var(--color-text-secondary);
}

.base-text--helper {
  color: var(--color-text-helper);
}
</style>
