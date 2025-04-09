<template>
  <div class="order-form">
    <BaseTitle
      size="h3"
      align="center"
      >{{ t('order.title') }}</BaseTitle
    >

    <form @submit.prevent="handleSubmit">
      <BaseInput
        v-for="field in formFields"
        :key="field.name"
        v-model="formData[field.name]"
        :placeholder="t(`order.form.${field.name}`)"
        :type="field.type"
        :error-message="errors[field.name]"
      />

      <BaseText
        v-if="isSuccess"
        kind="accent"
        >{{ t('order.successMessage') }}</BaseText
      >

      <BaseButton
        type="submit"
        block
        class="order-form__submit"
        >{{ t('order.form.createAccount') }}</BaseButton
      >
    </form>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue';
  import BaseButton from '@/components/ui/BaseButton.vue';
  import BaseInput from '@/components/ui/BaseInput.vue';
  import BaseText from '@/components/ui/BaseText.vue';
  import BaseTitle from '@/components/ui/BaseTitle.vue';
  import { formFields } from './formFields';
  import { useI18n } from 'vue-i18n';
  import type { FormData, FormErrors } from './types';

  // TODO можно хранить имя/почту в сторе, но форма маленькая, как будто особо нет смысла

  const { t } = useI18n();

  const isSuccess = ref(false);
  const formData = reactive<FormData>(Object.fromEntries(formFields.map((key) => [key.name, ''])));
  const errors = reactive<FormErrors>(Object.fromEntries(formFields.map((key) => [key.name, ''])));

  // TODO причесать бы
  const validateForm = () => {
    let valid = true;

    formFields.forEach(({ name, required, validator }) => {
      const value = formData[name];
      errors[name] = '';

      if (required && !value) {
        errors[name] = t('order.form.errors.required');
        valid = false;
      } else if (validator) {
        const result = validator(value);

        if (result) {
          errors[name] = t(`order.form.errors.${result}`);
          valid = false;
        }
      }
    });

    return valid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      isSuccess.value = true;
      console.log('Success', formData);
    } else {
      console.warn('Errors:', errors);
    }
  };
</script>

<style scoped>
  .order-form {
    background-color: var(--color-surface);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    min-width: 300px;
    padding: 24px;
  }

  /* TODO надо убирать и резервировать место для success msg чтоб не было скачков формы */
  .order-form__submit {
    margin-top: 28px;
  }
</style>
