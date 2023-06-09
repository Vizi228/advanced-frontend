import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';

// Компонент для тестування
const BugButton = () => {
  const [error, setError] = useState<boolean>();
  const { t } = useTranslation();

  const onThrowError = () => setError(true);

  useEffect(() => {
    if (error) {
      throw Error();
    }
  }, [error]);

  return (
    <Button className={classNames('')} onClick={onThrowError}>
      {t('Throw Error')}
    </Button>
  );
};

export default BugButton;
