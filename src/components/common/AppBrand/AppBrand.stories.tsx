import BaseComponent from '@/components/Component';

import { AppBrand } from './';

// ______________________________________________________
//
const mock = {
  components: [],
  image: './logo192.png',
};

const children = mock.components.map(BaseComponent);

// ______________________________________________________
//
export default {
  title: AppBrand.id,
  component: AppBrand,
};

export const Default = { args: { ...mock, children } };

export const Mock = {
  type: AppBrand.id,
  props: mock,
};
