export interface IProduct {
  id: string;
  name: string;
  quantity: number;
  price: number;
  date: string;
  stock: string;
}

export type ProductListType = IProduct[];
