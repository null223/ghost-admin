---
to: <%= abs_path %>/<%= component_name %>.stories.tsx
---
import { <%= component_name %>, id } from "./";
// ______________________________________________________
//
export default {
  title: id,
  component: <%= component_name %>,
}

export const Default = {};
