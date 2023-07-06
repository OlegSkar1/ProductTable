import { useState, useEffect, useCallback } from 'react';

interface useModalProps {
  isOpen: boolean;
  onClose?: () => void;
}

export const useModal = ({ isOpen, onClose }: useModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const onCloseHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
    }
  }, [onClose]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onCloseHandler();
      }
    };

    if (isOpen) {
      setIsMounted(true);
      window.document.addEventListener('keydown', onKeyDown);
    }
    return () => {
      setIsClosing(false);
      setIsMounted(false);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onCloseHandler]);

  return {
    isClosing,
    isMounted,
    onCloseHandler,
  };
};
