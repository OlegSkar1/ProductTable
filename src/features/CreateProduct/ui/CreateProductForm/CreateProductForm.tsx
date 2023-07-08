import { dateHelper } from '@/shared/lib/dateHelper/dateHelper';
import cls from './CreateProductForm.module.css';
import { StockList } from '@/entities/Stock';
import { MouseEvent } from 'react';
import { useProductForm } from '../../lib/hooks/useProductForm';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/Input';

interface Props {
  onSuccess: () => void;
  className?: string;
}

const CreateProductForm = ({ onSuccess, className }: Props) => {
  const { product, onChangeDate, onChangeName, onChangePrice, onChangeQnt, onChangeStock, onSave } =
    useProductForm();

  const { currDate } = dateHelper(product?.date);

  const submitHandler = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await onSave();
    onSuccess();
  };

  return (
    <form className={classNames(cls.form, [className], {})}>
      <Input
        placeholder="Product Name"
        name="name"
        value={product?.name ?? ''}
        onChange={onChangeName}
        className={cls.input}
      />
      <Input
        placeholder="Quantity"
        type="number"
        name="qnt"
        min="0"
        value={product?.quantity?.toString() ?? ''}
        onChange={onChangeQnt}
        className={cls.input}
      />
      <Input
        placeholder="Price"
        type="number"
        name="price"
        min="0"
        value={product?.price?.toString() ?? ''}
        onChange={onChangePrice}
        className={cls.input}
      />
      <Input
        placeholder="Date"
        type="date"
        name="date"
        max={currDate}
        value={product?.date ?? ''}
        onChange={onChangeDate}
        className={cls.input}
      />
      <StockList value={product?.stock} onChange={onChangeStock} className={cls.input} />
      <button onClick={submitHandler}>Submit</button>
    </form>
  );
};

export default CreateProductForm;
