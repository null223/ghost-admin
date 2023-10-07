import BaseComponent from '@/components/Component';

import { Spacer } from "./";
// ______________________________________________________
//
const mock = {
  components: []
};

const children = mock.components.map(BaseComponent);

// ______________________________________________________
//
export default {
  title: Spacer.id,
  component: Spacer,
};

export const Default = { args: { ...mock, children } };
