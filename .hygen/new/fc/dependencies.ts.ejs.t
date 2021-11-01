---
to: "<%= have_hooks ? `${abs_path}/dependencies.ts` : null %>"
---
import type { Props } from "./<%= component_name %>"
// ______________________________________________________
//
export function useDependencies(props: Props) {
  return {}
}
