---
to: <%= abs_path %>/<%= component_name %>.stories.tsx
---
import BaseComponent from '@/components/Component';

import { <%= component_name %> } from "./";
// ______________________________________________________
//
const mock = {
  components: []
};

const children = mock.components.map(BaseComponent);

// ______________________________________________________
//
export default {
  title: <%= component_name %>.id,
  component: <%= component_name %>,
};

export const Default = { args: { ...mock, children } };
