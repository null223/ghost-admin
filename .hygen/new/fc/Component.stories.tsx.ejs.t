---
to: <%= abs_path %>/<%= component_name %>.stories.tsx
---
import { <%= component_name %> } from "./";
// ______________________________________________________
//
const mock = {
  components: []
};

// ______________________________________________________
//
export default {
  title: <%= component_name %>.id,
  component: <%= component_name %>,
};

export const Default = { args: { ...mock } };
