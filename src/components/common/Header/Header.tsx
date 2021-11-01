import { memo } from 'react';

import { AppBar, Toolbar } from '@mui/material';

import type { WithIdFC } from '@/components/Component';

export const id = 'common/header';

// ______________________________________________________
//
export type Props = {
  children?: React.ReactNode;
};

// ______________________________________________________
//
export const Header: WithIdFC<Props> = ({ children }) => {
  return (
    <AppBar>
      <Toolbar>{children}</Toolbar>
    </AppBar>
  );
};

export default memo(Header);

Header.id = id;
