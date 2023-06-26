import { FC, useEffect } from 'react';

import { useDynamicModuleLoad } from 'shared/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';

import {
  fetchProfileData,
  ProfileCard,
  profileReducer,
} from 'entities/Profile';

interface IProfilePage {}

const ProfilePage: FC<IProfilePage> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  });
  useDynamicModuleLoad({ profile: profileReducer });
  return (
    <div className={classNames('ProfilePage')}>
      <ProfileCard />
    </div>
  );
};

export default ProfilePage;
