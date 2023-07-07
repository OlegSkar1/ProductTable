import { productListReducer } from '@/entities/Product';
import { productReducer } from '@/features/CreateProduct';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    productList: productListReducer,
    product: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
