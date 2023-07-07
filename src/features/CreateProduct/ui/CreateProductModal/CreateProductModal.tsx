import { Modal } from '@/shared/ui/Modal';
import { AsyncCreateProductForm } from '../CreateProductForm/CreateProductForm.async';

interface Props {
  onClose: () => void;
  isOpen: boolean;
}

export const CreateProductModal = ({ onClose, isOpen }: Props) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <AsyncCreateProductForm onSuccess={onClose} />
    </Modal>
  );
};
