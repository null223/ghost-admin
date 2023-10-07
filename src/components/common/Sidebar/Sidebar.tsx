import { memo } from 'react';

import { Drawer } from '@mui/material';

import type { WithIdFC } from '@/components/Component';

import { SidebarNav } from './SidebarNav';
import type { Props as SidebarNavProps } from './SidebarNav';

// ______________________________________________________
//
export const id = 'common/sidebar';

// ______________________________________________________
//

export type Props = {
  navs: SidebarNavProps[];
  children?: React.ReactNode;
};

// ______________________________________________________
//
export const _Sidebar: WithIdFC<Props> = ({ children, navs }) => {
  return (
    <Drawer open variant="permanent">
      {navs.map(SidebarNav)}
      {children}
    </Drawer>
  );
};

const Sidebar: React.NamedExoticComponent<{}> & {
  id?: string;
} = memo(_Sidebar);

Sidebar.id = id;

export default Sidebar;
// tsconfig ignore
