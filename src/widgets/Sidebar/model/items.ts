import { SVGProps, VFC } from 'react';

import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/Vector.svg';
import AboutIcon from 'shared/assets/clarity_list-outline-badged.svg';
import ProfileIcon from 'shared/assets/Vector-1.svg';

export interface ISidebarItem {
  to: string;
  name: string;
  icon: VFC<SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: ISidebarItem[] = [
  {
    to: RoutePath.main,
    name: 'Main',
    icon: HomeIcon,
  },
  {
    to: RoutePath.about,
    name: 'About us',
    icon: AboutIcon,
  },
  {
    to: RoutePath.profile,
    name: 'Profile',
    icon: ProfileIcon,
  },
];
