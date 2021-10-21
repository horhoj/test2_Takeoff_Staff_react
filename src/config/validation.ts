export const VALIDATION_ERROR_REQUIRED = 'Поле нужно заполнить';
export const VALIDATION_ERROR_EMAIL = 'Не почта';
export const VALIDATION_ERROR_MAX = (max: number): string =>
  `Не более ${max} символов`;
