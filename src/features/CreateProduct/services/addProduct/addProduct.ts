import { createAsyncThunk } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';

import { getProductListSelector, productlistActions } from '@/entities/Product';
import { getProductData } from '@/features/CreateProduct';

export const addProduct = createAsyncThunk<void, undefined, { state: StateSchema }>(
  'product/addProduct',
  (_, { getState, dispatch }) => {
    const productList = getProductListSelector(getState());
    const product = getProductData(getState());
    if (product) {
      const updateList = productList.concat(product);
      dispatch(productlistActions.setProductList(updateList));
    }
  }
);
