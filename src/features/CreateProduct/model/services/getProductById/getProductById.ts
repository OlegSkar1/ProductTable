import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { IProduct, getProductListSelector } from '@/entities/Product';

export const getProductById = createAsyncThunk<
  IProduct | undefined,
  string | undefined,
  { state: StateSchema; rejectValue: object }
>('product/getProductById', (id, { getState }) => {
  const productList = getProductListSelector(getState());
  const result = productList.find((product) => product.id === id);
  return result;
});
