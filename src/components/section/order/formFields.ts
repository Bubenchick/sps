import {
  validateCVC,
  validateCardNumber,
  validateEmail,
  validateExpireDate,
  validatePassword,
} from '@/utils/validators';
import type { FormField } from './types';

export const formFields: FormField[] = [
  {
    name: 'fullName',
    label: 'Имя',
    placeholder: 'Ваше имя',
    required: true,
  },
  {
    name: 'email',
    label: 'Email',
    placeholder: 'Ваш email',
    type: 'email',
    required: true,
    validator: (val) => (!validateEmail(val) ? 'invalidEmail' : null),
  },
  {
    name: 'password',
    label: 'Пароль',
    placeholder: 'Придумайте пароль',
    type: 'password',
    required: true,
    validator: (val) => (!validatePassword(val) ? 'invalidPassword' : null),
  },
  {
    name: 'cardNumber',
    label: 'Номер карты',
    placeholder: '0000 0000 0000 0000',
    required: true,
    validator: (val) => (!validateCardNumber(val) ? 'invalidCard' : null),
  },
  {
    name: 'expiryDate',
    label: 'Срок действия',
    placeholder: 'MM/YY',
    required: true,
    validator: (val) => (!validateExpireDate(val) ? 'invalidExpiry' : null),
  },
  {
    name: 'cvc',
    label: 'CVC',
    placeholder: '123',
    required: true,
    validator: (val) => (!validateCVC(val) ? 'invalidCVC' : null),
  },
];
