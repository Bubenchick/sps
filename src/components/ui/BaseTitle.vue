<template>
  <component
    :is="props.size"
    :class="[
      'base-title',
      `base-title--${props.size}`,
      {
        [`base-title--${props.kind}`]: props.kind,
        [`base-title--align-${props.align}`]: props.align,
      },
    ]"
  >
    <slot name="default"></slot>
  </component>
</template>

<script lang="ts" setup>
type IAlign = 'left' | 'center' | 'right'
type IKind = 'primary' | 'secondary'
type ISize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface IProps {
  align?: IAlign
  kind?: IKind
  size?: ISize
}

const props = withDefaults(defineProps<IProps>(), {
  align: 'left',
  kind: 'primary',
  size: 'h2',
})
</script>

<style scoped>
.base-title {
  margin: 0;
}

/* TODO line height + letter spacing for all sizes */
.base-title--h1 {
  font: var(--typography-h1);
}

.base-title--h2 {
  font: var(--typography-h1);
}

.base-title--h3 {
  font: var(--typography-h1);
}

.base-title--h4 {
  font: var(--typography-h1);
}

.base-title--h5 {
  font: var(--typography-h1);
}

.base-title--h6 {
  font: var(--typography-h1);
}

.base-title--primary {
  color: var(--color-text-primary);
}

.base-title--secondary {
  color: var(--color-text-secondary);
}

.base-title--align-left {
  text-align: left;
}

.base-title--align-center {
  text-align: center;
}

.base-title--align-right {
  text-align: right;
}
</style>
