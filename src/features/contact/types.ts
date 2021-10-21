import * as yup from 'yup';
import {
  VALIDATION_ERROR_MAX,
  VALIDATION_ERROR_REQUIRED,
} from '../../config/validation';

export const ContactSchema = yup.object({
  id: yup.number().required(),
  first_name: yup
    .string()
    .max(30, VALIDATION_ERROR_MAX(30))
    .required(VALIDATION_ERROR_REQUIRED),
  last_name: yup
    .string()
    .max(30, VALIDATION_ERROR_MAX(30))
    .required(VALIDATION_ERROR_REQUIRED),
  telephone: yup.string().nullable(),
  address: yup.string().nullable(),
});

export interface Contact extends yup.Asserts<typeof ContactSchema> {}
