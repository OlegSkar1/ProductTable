import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductSchema } from '../types/productSchema';
import { IProduct } from '@/entities/Product';
import { addProduct } from '../..';

const initialState: ProductSchema = {
  data: undefined,
  form: undefined,
  isLoading: false,
  isError: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    createProduct: (state, { payload }: PayloadAction<IProduct>) => {
      state.data = { ...state.data, ...payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.pending, (state) => {
        state.validateErrors = undefined;
      })
      .addCase(addProduct.fulfilled, (state) => {
        state.data = {};
      })
      .addCase(addProduct.rejected, (state, { payload }) => {
        state.validateErrors = payload;
      });
  },
});

export const { reducer: productReducer, actions: productActions } = productSlice;
