import { IProduct } from '@/entities/Product';

export type validateErrors = ValueOf<typeof validateErrors>;

export const validateErrors = {
  NO_DATA: 'no_data',
  INCORRECT_NAME: 'incorrect_name',
  INCORRECT_QNT: 'incorrect_qnt',
  INCORRECT_PRICE: 'incorrect_price',
  INCORRECT_DATE: 'icorrect_date',
  ICORRECT_STOCK: 'icorrect_stock',
} as const;

export type errorsMap = ValueOf<typeof errorsMap>;

export const errorsMap = {
  incorrect_name: 'Введите от 4 до 20 символов',
  incorrect_qnt: 'Количество должно быть не более 1000000',
  incorrect_price: 'Цена должна быть не более 1000000',
  icorrect_date: 'Дата не должна быть в будущем',
  icorrect_stock: 'Выберите склад',
  no_data: 'Сначала заполните форму',
} as const;

export interface ProductSchema {
  data?: IProduct;
  form?: IProduct;
  isLoading?: boolean;
  isError?: boolean;
  validateErrors?: validateErrors[];
}
