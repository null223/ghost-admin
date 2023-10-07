import BaseComponent from '@/components/Component';

import { UserMenu } from "./";
// ______________________________________________________
//
const mock = {
  components: []
};

const children = mock.components.map(BaseComponent);

// ______________________________________________________
//
export default {
  title: UserMenu.id,
  component: UserMenu,
};

export const Default = { args: { ...mock, children } };
