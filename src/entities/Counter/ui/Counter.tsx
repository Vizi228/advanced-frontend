import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui/Button/Button';

import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

interface ICounter {}

const Counter: FC<ICounter> = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const value = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testId="value-title">{value}</h1>
      <Button onClick={increment} data-testId="increment-btn">
        {t('increment')}
      </Button>
      <Button onClick={decrement} data-testId="decrement-btn">
        {t('decrement')}
      </Button>
    </div>
  );
};

export default Counter;
