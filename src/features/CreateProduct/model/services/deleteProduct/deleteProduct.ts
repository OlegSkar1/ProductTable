import { StateSchema } from '@/app/providers/StoreProvider';
import { getProductListSelector, productlistActions } from '@/entities/Product';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const deleteProduct = createAsyncThunk<void, string, { state: StateSchema }>(
  'product/deleteProduct',
  (id, { getState, dispatch }) => {
    const productList = getProductListSelector(getState());

    const updatedList = productList.filter((product) => product.id !== id);

    dispatch(productlistActions.setProductList(updatedList));
  }
);
