import { FC } from 'react';
import { IProduct } from '@/entities/Product';
import cls from './TableRow.module.css';
import { DeleteProduct } from '@/features/CreateProduct';
import { UpdateProductButton } from '@/widgets/UpdateProductButton';

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
        <div className={cls['edit-wrapper']}>
          <DeleteProduct id={id} />
          <UpdateProductButton id={id} />
        </div>
      </td>
    </tr>
  );
};
