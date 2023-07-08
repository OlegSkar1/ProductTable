import { ProductTable } from '@/widgets/ProductTable';
import { getProductListSelector, productlistActions } from '@/entities/Product';
import { Suspense, useEffect } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import cls from './TablePage.module.css';
import { CreateProductBtn } from '@/widgets/CreateProductBtn';

export const TablePage = () => {
  const dispatch = useAppDispatch();
  const productList = useSelector(getProductListSelector);
  console.log(productList);

  useEffect(() => {
    dispatch(productlistActions.getProductList());
  }, [dispatch]);

  return (
    <div className={cls.wrapper}>
      <Suspense fallback="">
        <CreateProductBtn className={cls.createBtn} />
        <ProductTable products={productList} />
      </Suspense>
    </div>
  );
};
