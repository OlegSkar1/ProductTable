import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useCallback, useId } from 'react';
import { productActions } from '../../model/slice/productSlice';
import { dateHelper } from '@/shared/lib/dateHelper/dateHelper';
import { StockType } from '@/entities/Stock';
import { addProduct } from '@/entities/Product';
import { useSelector } from 'react-redux';
import { getProductData } from '../..';

export const useProductForm = () => {
  const id = useId();
  const dispatch = useAppDispatch();
  const product = useSelector(getProductData);

  const onChangeName = useCallback(
    (value?: string) => {
      dispatch(productActions.createProduct({ name: value || '' }));
    },
    [dispatch]
  );
  const onChangeQnt = useCallback(
    (value?: number) => {
      dispatch(productActions.createProduct({ quantity: value || 0 }));
    },
    [dispatch]
  );
  const onChangePrice = useCallback(
    (value?: number) => {
      dispatch(productActions.createProduct({ price: value || 0 }));
    },
    [dispatch]
  );
  const onChangeDate = useCallback(
    (value?: string) => {
      const { currDate } = dateHelper();
      dispatch(productActions.createProduct({ date: value || currDate }));
    },
    [dispatch]
  );
  const onChangeStock = useCallback(
    (value?: StockType) => {
      dispatch(productActions.createProduct({ stock: value }));
    },
    [dispatch]
  );

  const onSave = useCallback(async () => {
    dispatch(productActions.createProduct({ id }));
    await dispatch(addProduct());
  }, [dispatch, id]);

  return {
    product,
    onChangeName,
    onChangeQnt,
    onChangePrice,
    onChangeDate,
    onChangeStock,
    onSave,
  };
};
