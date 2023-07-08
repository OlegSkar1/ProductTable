import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { CloseCircle } from '@emotion-icons/ionicons-solid';
import { deleteProduct } from '../../model/services/deleteProduct/deleteProduct';

interface Props {
  id?: string;
}

export const DeleteProduct = (props: Props) => {
  const { id } = props;
  const dispatch = useAppDispatch();

  const deleteHandler = async () => {
    if (id) {
      await dispatch(deleteProduct(id));
    }
  };

  return <CloseCircle size={20} onClick={deleteHandler} />;
};
