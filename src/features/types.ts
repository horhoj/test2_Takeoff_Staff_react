import * as yup from 'yup';
import { getCommonResponseSchemaFieldsForAnEntityList } from '../types/helpers';

export const ContactListItemSchema = yup.object({
  id: yup.number().required(),
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  telephone: yup.string().nullable(),
  address: yup.string().nullable(),
});

export interface ContactListItem
  extends yup.Asserts<typeof ContactListItemSchema> {}

export type ContactListItemKeys = keyof ContactListItem;

export const ContactListResponseSchema = yup.object({
  data: yup.array(ContactListItemSchema).required(),
  ...getCommonResponseSchemaFieldsForAnEntityList(),
});

export interface ContactListResponse
  extends yup.Asserts<typeof ContactListResponseSchema> {}
