import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductSchema } from '../types/productSchema';
import { IProduct, addProduct } from '@/entities/Product';

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
    builder.addCase(addProduct.fulfilled, (state) => {
      state.data = undefined;
    });
  },
});

export const { reducer: productReducer, actions: productActions } =
  productSlice;