import { memo } from 'react';
import styled, { css } from 'styled-components';
import type { WithIdFC } from '@/components/Component';

// ______________________________________________________
//
export const id = 'ui/spacer';


// ______________________________________________________
//
export type Props = {
  children?: React.ReactNode
};

// ______________________________________________________
//
export const _Spacer: WithIdFC<Props> = ({children}) => {
  return (
    <StSpacer>
      {children}
    </StSpacer>
  );
}

const Spacer: React.NamedExoticComponent<{}> & {
  id?: string;
} = memo(_Spacer);

Spacer.id = id;

export default Spacer;


const StSpacer = styled.div`
  ${({theme}) => css``}
`
