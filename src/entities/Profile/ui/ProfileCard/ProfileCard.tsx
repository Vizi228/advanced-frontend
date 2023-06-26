import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';

import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';

import styles from './ProfileCard.module.scss';

interface IProfileCard {}

const ProfileCard: FC<IProfileCard> = () => {
  const { t } = useTranslation('profile');
  const profileData = useSelector(getProfileData);

  return (
    <div className={classNames(styles.ProfileCard, {}, [])}>
      <div className={styles.header}>
        <Text title={t('Profile')} />
        <Button className={styles.editBtn} theme={ButtonTheme.OUTLINE}>
          {t('Edit')}
        </Button>
      </div>
      <div className={styles.profileData}>
        <Input className={styles.input} value={profileData?.city} placeholder={t('City')} />
      </div>
    </div>
  );
};

export default ProfileCard;
