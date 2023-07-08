import { IProduct } from '@/entities/Product';
import { validateErrors } from '../../types/productSchema';
import { dateHelper } from '@/shared/lib/dateHelper/dateHelper';

export const validateProductErrors = (product?: IProduct) => {
  if (!product) return [validateErrors.NO_DATA];

  const { name, quantity, price, date, stock } = product;

  const { isFuture } = dateHelper(date);

  const errors: validateErrors[] = [];

  if (!name || name.length < 4 || name.length > 20) {
    errors.push(validateErrors.INCORRECT_NAME);
  }

  if (!quantity || quantity > 1000000) {
    errors.push(validateErrors.INCORRECT_QNT);
  }

  if (!price || price > 1000000) {
    errors.push(validateErrors.INCORRECT_PRICE);
  }

  if (!date || isFuture) {
    errors.push(validateErrors.INCORRECT_DATE);
  }

  if (!stock) {
    errors.push(validateErrors.ICORRECT_STOCK);
  }

  return errors;
};
