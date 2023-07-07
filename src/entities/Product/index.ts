export { addProduct } from './model/services/addProduct/addProduct';
export { getProductList } from './model/services/getProductList/getProductList';
export { getProductListSelector } from './model/selectors/getProductListSelector/getProductListSelector';
export {
  productListReducer,
  productlistActions,
} from './model/slice/productListSlice';
export type {
  IProduct,
  ProductListType,
  ProductListSchema,
} from './model/types/product.type';
