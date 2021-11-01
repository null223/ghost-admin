import React, { Fragment, ReactNode } from 'react';

import { Header } from '@/components/common/Header';

// ______________________________________________________
//
export type Props = {
  type: string;
  props: {
    components?: Props[];
  };
  // children?: ReactNode;
};

export type WithIdFC<P = {}> = React.FC & {
  id: string;
};

const findComponent = (type: string) => {
  switch (type) {
    case Header.id:
      return Header;
      break;
    default:
      return Fragment;
  }
};

const Component: React.FC<Props> = ({ type, props }) => {
  const { components, ...restProps } = props;
  const NextComponent = findComponent(type);
  return (
    <NextComponent {...restProps}>
      {components?.map((comProps) => (
        <Component {...comProps} />
      ))}
    </NextComponent>
  );
};

export default Component;
