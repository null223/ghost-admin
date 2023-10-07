import { memo } from 'react';

import { AppBar, Toolbar } from '@mui/material';

import type { WithIdFC } from '@/components/Component';

// ______________________________________________________
//
export const id = 'common/header';

// ______________________________________________________
//
export type Props = {
  children?: React.ReactNode;
};

// ______________________________________________________
//
export const _Header: WithIdFC<Props> = ({ children }) => {
  return (
    <AppBar>
      <Toolbar>{children}</Toolbar>
    </AppBar>
  );
};

const Header: React.NamedExoticComponent<{}> & {
  id?: string;
} = memo(_Header);

Header.id = id;

export default Header;
