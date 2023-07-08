import { createAsyncThunk } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';

import { getProductListSelector, productlistActions } from '@/entities/Product';
import { getProductData } from '@/features/CreateProduct';
import { validateProductErrors } from '../validateProductErrors/validateProductErrors';
import { validateErrors } from '../../types/productSchema';

export const addProduct = createAsyncThunk<
  void,
  undefined,
  { state: StateSchema; rejectValue: validateErrors[] }
>('product/addProduct', (_, { getState, dispatch, rejectWithValue }) => {
  const productList = getProductListSelector(getState());
  const product = getProductData(getState());
  const errors = validateProductErrors(product);

  try {
    if (errors.length) {
      throw new Error();
    }

    if (product) {
      const updateList = productList.concat(product);
      dispatch(productlistActions.setProductList(updateList));
    }
  } catch (e) {
    return rejectWithValue(errors);
  }
});
