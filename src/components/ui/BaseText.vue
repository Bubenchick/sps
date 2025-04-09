<template>
  <component
    :is="props.tag"
    :class="[
      'base-text',
      {
        [`base-text--align-${props.align}`]: props.align,
        [`base-text--${props.kind}`]: props.kind,
        [`base-text--${props.size}`]: props.size,
      },
    ]"
  >
    <slot name="default"></slot>
  </component>
</template>

<script lang="ts" setup>
  type IAlign = 'left' | 'center' | 'right';
  type ISize = 'xs' | 'sm' | 'md' | 'lg';
  type IKind = 'primary' | 'secondary' | 'accent' | 'helper' | 'error';

  // TODO bold
  interface IProps {
    align?: IAlign;
    kind?: IKind;
    size?: ISize;
    tag?: keyof HTMLElementTagNameMap;
  }

  const props = withDefaults(defineProps<IProps>(), {
    align: 'left',
    kind: 'primary',
    size: 'md',
    tag: 'p',
  });
</script>

<style scoped>
  .base-text {
    margin: 0;
  }

  /* TODO letter spacing for all sizes */
  .base-text--xs {
    font: var(--typography-text-xs);
  }

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

  .base-text--accent {
    color: var(--color-text-accent);
  }

  .base-text--helper {
    color: var(--color-text-helper);
  }

  .base-text--error {
    color: var(--color-text-error);
  }

  .base-text--align-left {
    text-align: left;
  }

  .base-text--align-center {
    text-align: center;
  }

  .base-text--align-right {
    text-align: right;
  }
</style>
