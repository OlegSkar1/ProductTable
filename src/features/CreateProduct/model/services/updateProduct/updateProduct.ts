import { createAsyncThunk } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';

import { productlistActions } from '@/entities/Product';
import { validateProductErrors } from '../validateProductErrors/validateProductErrors';
import { validateErrors } from '../../types/productSchema';
import { getProductData } from '../../selectors/productSelectors/productSelectors';

export const updateProduct = createAsyncThunk<
  void,
  undefined,
  { state: StateSchema; rejectValue: validateErrors[] }
>('product/updateProduct', (_, { getState, dispatch, rejectWithValue }) => {
  try {
    const productData = getProductData(getState());
    const errors = validateProductErrors(productData);

    if (errors.length) {
      return rejectWithValue(errors);
    }

    productData && dispatch(productlistActions.updateProductListById(productData));
  } catch (e) {
    console.log(e);
  }
});
