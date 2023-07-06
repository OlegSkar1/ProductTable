import { Props } from '../ProductTable/ProductTable';
import { TableRow } from '../TableRow/TableRow';

export const ProductList = ({ products }: Props) => {
  return (
    <>
      {products.map((product) => (
        <TableRow product={product} key={product.id} />
      ))}
    </>
  );
};
