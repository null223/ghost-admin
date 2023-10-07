import { memo } from 'react';

import styled, { css } from 'styled-components';

import type { WithIdFC } from '@/components/Component';

// ______________________________________________________
//
export const id = 'common/app_brand';

// ______________________________________________________
//
export type Props = {
  // children?: React.ReactNode
  image: string;
  // alt?: string
  // height?:
};

// ______________________________________________________
//
export const _AppBrand: WithIdFC<Props> = ({ image }) => {
  return (
    <StAppBrand>
      <img src={image} alt="" />
    </StAppBrand>
  );
};

const AppBrand: React.NamedExoticComponent<{}> & {
  id?: string;
} = memo(_AppBrand);

AppBrand.id = id;

export default AppBrand;

const StAppBrand = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    img {
      position: relative;
      top: -5px;
      width: 140px;
    }
  `}
`;
