import { StateSchema } from '@/app/providers/StoreProvider';

export const getProductForm = (state: StateSchema) => state.product.form;
export const getProductData = (state: StateSchema) => state.product.data;
export const isProductError = (state: StateSchema) => state.product.isError;
export const getProductErrors = (state: StateSchema) =>
  state.product.validateErrors;
export const isLoadingProduct = (state: StateSchema) => state.product.isLoading;
