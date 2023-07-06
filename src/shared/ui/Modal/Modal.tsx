import { FC, ReactNode, memo } from 'react';
import { Portal } from '../Portal';
import cls from './Modal.module.css';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import { Overlay } from '../Overlay';
import { useModal } from '@/shared/lib/hooks/useModal';

interface Props {
  onClose?: () => void;
  isOpen: boolean;
  children: ReactNode;
}

export const Modal: FC<Props> = memo(({ onClose, isOpen, children }) => {
  const { isClosing, isMounted, onCloseHandler } = useModal({
    onClose,
    isOpen,
  });

  const mode: Mods = {
    [cls.close]: isClosing,
    [cls.open]: isOpen,
  };

  if (!isMounted) {
    return null;
  }

  return (
    <Portal>
      <div
        className={classNames(cls.modal, [], mode)}
        onAnimationEnd={isClosing ? onClose : undefined}
      >
        <Overlay onClick={onCloseHandler} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
});
