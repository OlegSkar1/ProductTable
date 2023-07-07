import { StockType } from '@/entities/Stock';

export interface IProduct {
  id?: string;
  name?: string;
  quantity?: number;
  price?: number;
  date?: string;
  stock?: StockType;
}

export type ProductListType = IProduct[];

export interface ProductListSchema {
  data: ProductListType;
  isLoading?: boolean;
}
