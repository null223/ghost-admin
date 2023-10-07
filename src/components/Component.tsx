import React, { Fragment, ReactNode } from 'react';

import { AppBrand } from '@/components/common/AppBrand';
import { AppTitle } from '@/components/common/AppTitle';
import { Header } from '@/components/common/Header';
import { Sidebar } from '@/components/common/Sidebar';

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
  id?: string;
};

const findComponent = (type: string) => {
  switch (type) {
    case Header.id:
      return Header;
      break;
    case Sidebar.id:
      return Sidebar;
      break;
    case AppBrand.id:
      return AppBrand;
      break;
    case AppTitle.id:
      return AppTitle;
      break;
    default:
      // throw Error('undefined Component.');
      return () => <Fragment>{'undefined Component: ' + type}</Fragment>;
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
