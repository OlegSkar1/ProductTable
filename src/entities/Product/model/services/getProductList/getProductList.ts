import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProductListType } from '../../types/product.type';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getProductListSelector } from '../../selectors/getProductListSelector/getProductListSelector';

export const getProductList = createAsyncThunk<
  ProductListType,
  void,
  { state: StateSchema }
>('product/getProductList', (_, { getState }) => {
  const productListStore = localStorage.getItem('PRODUCTS_KEY');

  if (!productListStore) {
    const productList = getProductListSelector(getState());
    return productList;
  }

  return JSON.parse(productListStore) as ProductListType;
});
