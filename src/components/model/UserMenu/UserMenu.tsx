import styled, { css } from 'styled-components';

import type { WithIdFC } from '@/components/Component';

import { useDependencies } from './dependencies';

// ______________________________________________________
//
export const id = 'model/user_menu';

// ______________________________________________________
//
export type Props = {
  children?: React.ReactNode;
};

// ______________________________________________________
//
export const UserMenu: React.FC<Props> & {id?: string} = (props) => {
  const deps = useDependencies(props);
  return <StUserMenu>{props.children}</StUserMenu>;
};

UserMenu.id = id;

export default UserMenu;

const StUserMenu = styled.div`
  ${({ theme }) => css``}
`;
