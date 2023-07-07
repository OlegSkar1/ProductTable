import { ProductListSchema } from '@/entities/Product';
import { ProductSchema } from '@/features/CreateProduct';

export interface StateSchema {
  productList: ProductListSchema;
  product: ProductSchema;
}
