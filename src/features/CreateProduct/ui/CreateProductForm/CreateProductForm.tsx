import { dateHelper } from '@/shared/lib/dateHelper/dateHelper';
import cls from './CreateProductForm.module.css';
import { StockList } from '@/entities/Stock';
import { MouseEvent, useEffect } from 'react';
import { useProductForm } from '../../lib/hooks/useProductForm';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/Input';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { productActions } from '../../model/slice/productSlice';
import { errorsMap } from '../../model/types/productSchema';
import { updateProduct } from '../../model/services/updateProduct/updateProduct';
import { getProductById } from '../../model/services/getProductById/getProductById';
import { addProduct } from '../../model/services/addProduct/addProduct';

interface Props {
  onSuccess: () => void;
  className?: string;
  id?: string;
  isOpen?: boolean;
}

const CreateProductForm = ({ onSuccess, className, id, isOpen }: Props) => {
  const {
    product,
    validateErrors,
    onChangeDate,
    onChangeName,
    onChangePrice,
    onChangeQnt,
    onChangeStock,
  } = useProductForm();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isOpen) {
      dispatch(getProductById(id));
    }
  }, [dispatch, id, isOpen]);

  const { currDate } = dateHelper(product?.date);

  const submitHandler = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    let result;

    if (id) {
      result = await dispatch(updateProduct());
    } else {
      const uid = Date.now().toString().slice(3);
      dispatch(productActions.createProduct({ id: uid }));
      result = await dispatch(addProduct());
    }

    if (result.meta.requestStatus === 'fulfilled') onSuccess();
  };

  return (
    <form className={classNames(cls.form, [className], {})}>
      <Input
        placeholder="Product Name"
        name={product?.name}
        value={product?.name ?? ''}
        validateError={validateErrors?.includes('incorrect_name') ? errorsMap.incorrect_name : ''}
        onChange={onChangeName}
        className={cls.input}
      />
      <Input
        placeholder="Quantity"
        type="number"
        name={product?.quantity?.toString()}
        min="0"
        value={product?.quantity?.toString() ?? ''}
        validateError={validateErrors?.includes('incorrect_qnt') ? errorsMap.incorrect_qnt : ''}
        onChange={onChangeQnt}
        className={cls.input}
      />
      <Input
        placeholder="Price"
        type="number"
        name={product?.price?.toString()}
        min="0"
        value={product?.price?.toString() ?? ''}
        validateError={validateErrors?.includes('incorrect_price') ? errorsMap.incorrect_price : ''}
        onChange={onChangePrice}
        className={cls.input}
      />
      <Input
        placeholder="Date"
        type="date"
        name={product?.date}
        max={currDate}
        required
        value={product?.date ?? ''}
        validateError={validateErrors?.includes('icorrect_date') ? errorsMap.icorrect_date : ''}
        onChange={onChangeDate}
        className={cls.input}
      />
      <StockList
        validateErrors={validateErrors?.includes('icorrect_stock') ? errorsMap.icorrect_stock : ''}
        name={product?.stock}
        value={product?.stock}
        onChange={onChangeStock}
        className={cls.input}
      />
      <button onClick={submitHandler}>Submit</button>
    </form>
  );
};

export default CreateProductForm;
