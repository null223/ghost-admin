import BaseComponent from '@/components/Component';

import { AppTitle } from './';

// ______________________________________________________
//
const app_name = 'Ghost Admin';

const mock = {
  components: [],
  title: app_name,
};

const children = mock.components.map(BaseComponent);

// ______________________________________________________
//
export default {
  title: AppTitle.id,
  component: AppTitle,
};

export const Default = { args: { ...mock, children } };

export const Mock = {
  type: AppTitle.id,
  props: mock,
};
