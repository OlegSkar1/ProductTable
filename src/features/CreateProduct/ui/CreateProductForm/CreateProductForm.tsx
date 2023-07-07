import { dateHelper } from '@/shared/lib/dateHelper/dateHelper';
import cls from './CreateProductForm.module.css';
import { StockList } from '@/entities/Stock';
import { MouseEvent } from 'react';
import { useProductForm } from '../../lib/hooks/useProductForm';
import { classNames } from '@/shared/lib/classNames/classNames';

interface Props {
  onSuccess: () => void;
  className?: string;
}

const CreateProductForm = ({ onSuccess, className }: Props) => {
  const { currDate } = dateHelper();
  const {
    product,
    onChangeDate,
    onChangeName,
    onChangePrice,
    onChangeQnt,
    onChangeStock,
    onSave,
  } = useProductForm();

  const submitHandler = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await onSave();
    onSuccess();
  };

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeName(e.target.value);
  };
  const qntHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeQnt(+e.target.value);
  };
  const priceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangePrice(+e.target.value);
  };
  const dateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeDate(e.target.value);
    console.log(e.target.value);
  };

  return (
    <form className={classNames(cls.form, [className], {})}>
      <input
        placeholder="Product Name"
        name="name"
        value={product?.name}
        onChange={nameHandler}
      />
      <input
        placeholder="Quantity"
        type="number"
        name="qnt"
        min="0"
        value={product?.quantity}
        onChange={qntHandler}
      />
      <input
        placeholder="Price"
        type="number"
        name="price"
        min="0"
        value={product?.price}
        onChange={priceHandler}
      />
      <input
        placeholder="Date"
        type="date"
        name="date"
        max={currDate}
        value={product?.date}
        onChange={dateHandler}
      />
      <StockList value={product?.stock} onChange={onChangeStock} />
      <button onClick={submitHandler}>Submit</button>
    </form>
  );
};

export default CreateProductForm;
