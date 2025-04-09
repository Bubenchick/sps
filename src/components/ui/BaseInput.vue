<!-- по хорошему переделать на слоты для ошибки, добавить слот для тайтла + пост/пре иконки + clearable проп ведь не всегда надо чистить -->
<template>
  <div class="base-input">
    <input
      v-model="model"
      class="base-input__input"
      :type="type"
      :placeholder
      :required
    />

    <BaseButton
      v-if="model"
      class="base-input__clear"
      size="sm"
      kind="ghost"
      @click="clearInput"
    >
      ✕
    </BaseButton>

    <!-- TODO мы пока не готовы к большим сообщениям об ошибках -->
    <BaseText
      v-if="errorMessage"
      kind="error"
      size="xs"
      class="base-input__error"
    >
      {{ errorMessage }}
    </BaseText>
  </div>
</template>

<script lang="ts" setup>
  import { defineModel } from 'vue';
  import BaseButton from './BaseButton.vue';
  import BaseText from './BaseText.vue';

  interface IProps {
    placeholder?: string;
    type?: string;
    required?: boolean;
    errorMessage?: string;
  }

  const model = defineModel<string>();
  const { placeholder, type, required, errorMessage } = defineProps<IProps>();

  const clearInput = () => (model.value = '');
</script>

<style scoped>
  .base-input {
    align-items: center;
    background-color: var(--color-ghost);
    border-radius: 8px;
    border: 1px solid var(--color-border);
    display: flex;
    gap: 12px;
    height: 44px;
    margin-bottom: 28px;
    padding: 0 12px;
    position: relative;
  }

  .base-input:focus-within {
    border-color: var(--color-primary-hover);
  }

  .base-input__input {
    background-color: var(--color-ghost);
    border: none;
    flex: 1;
    font-size: 16px;
    outline: none;
    color: var(--color-text-primary);
  }

  .base-input__clear {
    flex-shrink: 0;
  }

  /* TODO обернуть инпут и кнопку в контейнер и сделать все на флексах */
  .base-input__error {
    position: absolute;
    bottom: -24px;
    left: 14px;
  }
</style>
