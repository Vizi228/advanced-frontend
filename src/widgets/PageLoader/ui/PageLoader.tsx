import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';

import styles from './PageLoader.module.scss';

interface IPageLoader {
  className?: string;
}

export const PageLoader: FC<IPageLoader> = ({ className }) => (
  <div className={classNames(styles.PageLoader, {}, [className])}>
    <Loader />
  </div>
);
