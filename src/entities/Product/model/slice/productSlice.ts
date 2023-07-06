import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductListType, ProductSchema } from '../..';
import { productList } from '@/shared/const/productList';
import { PRODUCTS_KEY } from '@/shared/const/localStorage';
import { getProductList } from '../services/getProductList/getProductList';

const initialState: ProductSchema = {
  data: productList,
};

const productSlice = createSlice({
  name: 'product',
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

export const { reducer: productReducer, actions: productActions } =
  productSlice;
