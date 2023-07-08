import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductListSchema, ProductListType } from '../..';
import { productList } from '@/shared/const/productList';
import { PRODUCTS_KEY } from '@/shared/const/localStorage';

const initialState: ProductListSchema = {
  data: productList,
};

const productListSlice = createSlice({
  name: 'productList',
  initialState,
  reducers: {
    setProductList: (state, { payload }: PayloadAction<ProductListType>) => {
      state.data = payload;
      localStorage.setItem(PRODUCTS_KEY, JSON.stringify(state.data));
    },
    getProductList: (state) => {
      const productListStore = localStorage.getItem(PRODUCTS_KEY);

      if (!productListStore) {
        state.data = initialState.data;
      } else {
        state.data = JSON.parse(productListStore) as ProductListType;
      }
    },
  },
});

export const { reducer: productListReducer, actions: productlistActions } = productListSlice;
