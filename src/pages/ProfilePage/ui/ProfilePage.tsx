import { FC } from 'react';

import { useDynamicModuleLoad } from 'shared/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { profileReducer } from 'entities/Profile';

interface IProfilePage {}

const ProfilePage: FC<IProfilePage> = () => {
  useDynamicModuleLoad({ profile: profileReducer });
  return (
    <div />
  );
};

export default ProfilePage;
