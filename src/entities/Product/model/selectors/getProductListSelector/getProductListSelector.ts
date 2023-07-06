import { StateSchema } from '@/app/providers/StoreProvider';

export const getProductListSelector = (state: StateSchema) =>
  state.product.data;
