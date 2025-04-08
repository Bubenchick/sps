export interface FormField {
  name: string
  label: string
  placeholder: string
  type?: string
  required?: boolean
  validator?: (value: string) => string | null
}
