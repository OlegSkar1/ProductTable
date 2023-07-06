import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

export const Portal = ({ children }: { children: ReactNode }) => {
  const element = document.querySelector('#root')!;

  return createPortal(children, element);
};
