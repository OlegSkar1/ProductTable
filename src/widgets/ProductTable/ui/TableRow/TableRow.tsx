import { FC } from 'react';
import { IProduct } from '@/entities/Product';
import { AddCircle, CloseCircle } from '@emotion-icons/ionicons-solid';

interface Props {
  product: IProduct;
}

export const TableRow: FC<Props> = ({ product }) => {
  const { date, id, name, quantity, price, stock } = product;
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>{date}</td>
      <td>{stock}</td>
      <td>
        <div>
          <CloseCircle size={20} />
          <AddCircle size={20} />
        </div>
      </td>
    </tr>
  );
};
