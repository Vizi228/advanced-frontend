import { FC } from 'react';

import './Loader.scss';

interface ILoader {}

export const Loader: FC<ILoader> = () => (
  <div className="lds-circle">
    <div />
  </div>
);
