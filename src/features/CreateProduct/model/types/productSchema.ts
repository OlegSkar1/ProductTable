import { IProduct } from '@/entities/Product';

export interface ProductSchema {
  data?: IProduct;
  form?: IProduct;
  isLoading?: boolean;
  isError?: boolean;
  validateErrors?: string[];
}
