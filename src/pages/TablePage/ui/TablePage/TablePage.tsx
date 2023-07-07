import { ProductTable } from '@/widgets/ProductTable';
import { getProductList, getProductListSelector } from '@/entities/Product';
import { useEffect } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import cls from './TablePage.module.css';
import { CreateProductBtn } from '@/widgets/CreateProductBtn';

export const TablePage = () => {
  const dispatch = useAppDispatch();
  const productList = useSelector(getProductListSelector);

  useEffect(() => {
    dispatch(getProductList);
  }, [dispatch]);

  return (
    <div className={cls.wrapper}>
      <CreateProductBtn className={cls.createBtn} />
      <ProductTable products={productList} />
    </div>
  );
};
