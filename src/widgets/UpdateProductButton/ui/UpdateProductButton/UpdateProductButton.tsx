import { CreateProductModal } from '@/features/CreateProduct';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AddCircle } from '@emotion-icons/ionicons-solid';
import { useState } from 'react';

import cls from './UpdateProductButton.module.css';

interface Props {
  className?: string;
  id?: string;
}

export const UpdateProductButton = (props: Props) => {
  const { className, id } = props;

  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setIsOpen(true);
  };

  const closeHandler = () => {
    setIsOpen(false);
  };
  return (
    <div className={classNames(cls.wrapper, [className], {})}>
      <AddCircle size={20} onClick={openHandler} />
      <CreateProductModal isOpen={isOpen} onClose={closeHandler} id={id} />
    </div>
  );
};
