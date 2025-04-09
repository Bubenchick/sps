import type { formFields } from './formFields'

export interface FormField {
  name: string
  label: string
  placeholder: string
  type?: string
  required?: boolean
  validator?: (value: string) => string | null
}

export type FormFields = (typeof formFields)[number]
export type FormData = Record<FormFields['name'], string>
export type FormErrors = Partial<Record<FormFields['name'], string>>
