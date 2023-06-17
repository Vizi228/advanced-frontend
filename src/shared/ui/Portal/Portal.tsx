import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface IPortal {
  children?: ReactNode;
  to?: HTMLElement;
}

const Portal: FC<IPortal> = (props) => {
  const { children, to = document.body } = props;
  return createPortal(children, to);
};

export default Portal;
