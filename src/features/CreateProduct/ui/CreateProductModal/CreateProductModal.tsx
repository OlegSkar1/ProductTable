import { Modal } from '@/shared/ui/Modal';
import { AsyncCreateProductForm } from '../CreateProductForm/CreateProductForm.async';

interface Props {
  onClose: () => void;
  isOpen: boolean;
  id?: string;
}

export const CreateProductModal = ({ onClose, isOpen, id }: Props) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <AsyncCreateProductForm onSuccess={onClose} id={id} isOpen={isOpen} />
    </Modal>
  );
};
