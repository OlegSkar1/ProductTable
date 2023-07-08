import { Create } from '@emotion-icons/ionicons-solid';
import { CreateProductModal } from '@/features/CreateProduct';
import { useState } from 'react';
interface Props {
  className?: string;
}

export const CreateProductBtn = (props: Props) => {
  const { className } = props;

  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setIsOpen(true);
  };

  const closeHandler = () => {
    setIsOpen(false);
  };

  return (
    <div className={className}>
      <Create size={40} onClick={openHandler} />
      <CreateProductModal isOpen={isOpen} onClose={closeHandler} />
    </div>
  );
};
