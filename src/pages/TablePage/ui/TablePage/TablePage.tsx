import { ProductTable } from '@/widgets/ProductTable';
import { getProductList, getProductListSelector } from '@/entities/Product';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { Create } from '@emotion-icons/ionicons-solid';
import cls from './TablePage.module.css';
import { Modal } from '@/shared/ui/Modal';

export const TablePage = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const productList = useSelector(getProductListSelector);

  useEffect(() => {
    dispatch(getProductList);
  }, [dispatch]);

  return (
    <div className={cls.wrapper}>
      <button onClick={() => setOpen(true)}> modal btn</button>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <div>test</div>
      </Modal>
      <Create size={40} className={cls.icon} />
      <ProductTable products={productList} />
    </div>
  );
};
