import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useCallback } from 'react';
import { productActions } from '../../model/slice/productSlice';
import { StockType } from '@/entities/Stock';
import { useSelector } from 'react-redux';
import { getProductData } from '../..';
import { getValidateErrors } from '../../model/selectors/productSelectors/productSelectors';

export const useProductForm = () => {
  const dispatch = useAppDispatch();
  const product = useSelector(getProductData);
  const validateErrors = useSelector(getValidateErrors);

  const onChangeName = useCallback(
    (value?: string) => {
      dispatch(productActions.createProduct({ name: value || '' }));
    },
    [dispatch]
  );
  const onChangeQnt = useCallback(
    (value?: string) => {
      dispatch(productActions.createProduct({ quantity: Number(value) || 0 }));
    },
    [dispatch]
  );
  const onChangePrice = useCallback(
    (value?: string) => {
      dispatch(productActions.createProduct({ price: Number(value) || 0 }));
    },
    [dispatch]
  );
  const onChangeDate = useCallback(
    (value?: string) => {
      dispatch(productActions.createProduct({ date: value }));
    },
    [dispatch]
  );
  const onChangeStock = useCallback(
    (value?: StockType) => {
      dispatch(productActions.createProduct({ stock: value }));
    },
    [dispatch]
  );

  return {
    product,
    validateErrors,
    onChangeName,
    onChangeQnt,
    onChangePrice,
    onChangeDate,
    onChangeStock,
  };
};
