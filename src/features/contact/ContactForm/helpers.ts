import { Contact } from '../types';

export const prepareCategoryFormData = (categoryData: Contact): Contact => ({
  ...categoryData,
  telephone: categoryData.telephone || '',
  address: categoryData.address || '',
});
