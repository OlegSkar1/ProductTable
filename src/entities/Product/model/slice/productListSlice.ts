import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductListSchema, ProductListType } from '../..';
import { productList } from '@/shared/const/productList';
import { PRODUCTS_KEY } from '@/shared/const/localStorage';
import { getProductList } from '../services/getProductList/getProductList';

const initialState: ProductListSchema = {
  data: productList,
};

const productListSlice = createSlice({
  name: 'productList',
  initialState,
  reducers: {
    setProductList: (state, { payload }: PayloadAction<ProductListType>) => {
      state.data = payload;
      localStorage.setItem(PRODUCTS_KEY, JSON.stringify(state));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductList.fulfilled, (state, { payload }) => {
      state.data = payload;
    });
  },
});

export const { reducer: productListReducer, actions: productlistActions } =
  productListSlice;
