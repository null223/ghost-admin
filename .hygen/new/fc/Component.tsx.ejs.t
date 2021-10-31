---
to: <%= abs_path %>/<%= component_name %>.tsx
---
<% if (have_style) { -%>
import styled, { css } from 'styled-components'
<% } -%>

export const type = '<%= category %>/<%= snake_name %>';

<% if (have_hooks) { -%>
// ______________________________________________________
//
import { useDependencies } from './dependencies'
<% } -%>
<% if (have_props) { -%>
// ______________________________________________________
//
export type Props = {
};
<% } -%>
// ______________________________________________________
//
export const <%= component_name %>: <%- type_annotate %> = <%= props %> => {
<% if (have_hooks) { -%>
  const deps = useDependencies<%= props %>
<% } -%>
  return (
<% if (have_style) { -%>
    <St<%= component_name %>>
    </St<%= component_name %>>
<% } else { -%>
    <<%= tag %>>
    </<%= tag %>>
<% } -%>
  );
}
<% if (have_style) { -%>

const St<%= component_name %> = styled.<%= tag %>`
  ${({theme}) => css``}
`
<% } -%>
