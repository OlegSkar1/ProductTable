import { FC, memo } from 'react';
import { ProductListType } from '@/entities/Product';
import cls from './ProductTable.module.css';
import { ProductList } from '../ProductList/ProductList';

export interface Props {
  products: ProductListType;
}

export const ProductTable: FC<Props> = memo(({ products }) => {
  return (
    <div className={cls.wrapper}>
      <table className={cls.table}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Date</th>
            <th>Stock</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <ProductList products={products} />
        </tbody>
      </table>
    </div>
  );
});
