import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductSchema } from '../types/productSchema';
import { IProduct } from '@/entities/Product';
import { addProduct } from '../..';
import { updateProduct } from '../services/updateProduct/updateProduct';
import { getProductById } from '../services/getProductById/getProductById';

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
      })
      .addCase(updateProduct.pending, (state) => {
        state.validateErrors = undefined;
      })
      .addCase(updateProduct.fulfilled, (state) => {
        state.data = {};
      })
      .addCase(updateProduct.rejected, (state, { payload }) => {
        state.validateErrors = payload;
      })
      .addCase(getProductById.pending, (state) => {
        state.validateErrors = undefined;
        state.data = {};
      })
      .addCase(getProductById.fulfilled, (state, { payload }) => {
        state.data = payload;
      });
  },
});

export const { reducer: productReducer, actions: productActions } = productSlice;
