/**
 * Валидирует email адрес
 */
export function validateEmail(email: string): boolean {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return re.test(email)
}

/**
 * Валидирует номер карты
 */
export function validateCardNumber(cardNumber: string): boolean {
  const digitsOnly = cardNumber.replace(/\D/g, '')
  return digitsOnly.length >= 13 && digitsOnly.length <= 19
}

/**
 * Валидирует срок действия карты в формате MM/YY
 */
export function validateExpireDate(expiryDate: string): boolean {
  const re = /^(0[1-9]|1[0-2])\/([0-9]{2})$/
  if (!re.test(expiryDate)) return false

  const [month, year] = expiryDate.split('/')
  const now = new Date()
  const currentYear = now.getFullYear() % 100
  const currentMonth = now.getMonth() + 1

  const expiryMonth = parseInt(month, 10)
  const expiryYear = parseInt(year, 10)

  if (expiryYear < currentYear || (expiryYear === currentYear && expiryMonth < currentMonth)) {
    return false
  }

  return true
}

/**
 * Валидирует CVC код
 */
export function validateCVC(cvc: string): boolean {
  const re = /^[0-9]{3,4}$/
  return re.test(cvc)
}
