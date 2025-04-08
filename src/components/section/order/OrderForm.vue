<template>
  <div class="order-form">
    <BaseTitle size="h3" align="center">{{ t('order.title') }}</BaseTitle>

    <form @submit.prevent="handleSubmit">
      <BaseInput
        v-for="field in fields"
        :key="field.name"
        v-model="formData[field.name]"
        :placeholder="t(`order.form.${field.name}`)"
        :type="field.type"
        :required="field.required"
        :error-message="errors[field.name]"
      />

      <BaseButton type="submit" block>
        {{ t('order.form.createAccount') }}
      </BaseButton>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseTitle from '@/components/ui/BaseTitle.vue'
import { fields } from './fields'
import { useI18n } from 'vue-i18n'

type FormData = Record<string, string>
type Errors = Record<string, string>

const { t } = useI18n()

const formData = ref<FormData>({})
const errors = ref<Errors>({})

fields.forEach((field) => {
  formData.value[field.name] = ''
  errors.value[field.name] = ''
})

const validateForm = () => {
  let valid = true

  fields.forEach(({ name, required, validator }) => {
    const value = formData.value[name]
    errors.value[name] = ''

    if (required && !value) {
      errors.value[name] = t('order.form.errors.required')
      valid = false
    } else if (validator) {
      const result = validator(value)
      if (result) {
        errors.value[name] = t(`order.form.errors.${result}`)
        valid = false
      }
    }
  })

  return valid
}

const handleSubmit = () => {
  if (validateForm()) {
    console.log('Форма отправлена:', formData.value)
  } else {
    console.log('Ошибки:', errors.value)
  }
}
</script>

<style scoped>
.order-form {
  min-width: 300px;
  background-color: var(--color-surface);
  padding: 24px;
  border-radius: 8px;
}
</style>
