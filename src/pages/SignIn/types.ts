import * as yup from 'yup';
import {
  VALIDATION_ERROR_EMAIL,
  VALIDATION_ERROR_REQUIRED,
} from '../../config/validation';

export const signUpSchema = yup.object({
  email: yup
    .string()
    .email(VALIDATION_ERROR_EMAIL)
    .required(VALIDATION_ERROR_REQUIRED),
  password: yup.string().required(VALIDATION_ERROR_REQUIRED),
});

export interface SignUpFormData extends yup.Asserts<typeof signUpSchema> {}
