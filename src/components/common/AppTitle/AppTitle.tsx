import { memo } from 'react';

import styled, { css } from 'styled-components';

import { Typography } from '@mui/material';

import type { WithIdFC } from '@/components/Component';

// ______________________________________________________
//
export const id = 'common/app_title';

// ______________________________________________________
//
export type Props = {
  // children?: React.ReactNode
  title: string;
};

// ______________________________________________________
//
export const _AppTitle: WithIdFC<Props> = ({ title }) => {
  return (
    <StAppTitle>
      <Typography variant="h1" noWrap>
        {title}
      </Typography>
    </StAppTitle>
  );
};

const AppTitle: React.NamedExoticComponent<{}> & {
  id?: string;
} = memo(_AppTitle);

AppTitle.id = id;

export default AppTitle;

const StAppTitle = styled.div`
  ${({ theme }) => css``}
`;
