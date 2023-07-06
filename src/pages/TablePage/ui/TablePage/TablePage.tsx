import { useEffect, useState } from 'react';
import { ProductTable } from '@/widgets/ProductTable';
import { productList } from '@/shared/const/productList';

export const TablePage = () => {
  const [products, setProducts] = useState(productList);

  // useEffect(() => {}, []);

  return <ProductTable products={products} />;
};
