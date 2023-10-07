---
to: <%= abs_path %>/<%= component_name %>.tsx
---
<% if (is_memo) { -%>
import { memo } from 'react';
<% } -%>
<% if (have_style) { -%>
import styled, { css } from 'styled-components';
<% } -%>
<% if (have_hooks) { -%>
import { useDependencies } from './dependencies';
<% } -%>
import type { WithIdFC } from '@/components/Component';

// ______________________________________________________
//
export const id = '<%= category %>/<%= snake_name %>';


// ______________________________________________________
//
export type Props = {
  children?: React.ReactNode
};

// ______________________________________________________
//
export const <% if (is_memo) { -%>_<% } -%><%= component_name %>: WithIdFC<Props> = ({children}) => {
<% if (have_hooks) { -%>
  const deps = useDependencies<%= props %>
<% } -%>
  return (
<% if (have_style) { -%>
    <St<%= component_name %>>
      {children}
    </St<%= component_name %>>
<% } else { -%>
    <<%= tag %>>
      {children}
    </<%= tag %>>
<% } -%>
  );
}

<% if (is_memo) { -%>
const <%= component_name %>: React.NamedExoticComponent<{}> & {
  id?: string;
} = memo(_<%= component_name %>);
<% } -%>

<%= component_name %>.id = id;

export default <%= component_name %>;

<% if (have_style) { -%>

const St<%= component_name %> = styled.<%= tag %>`
  ${({theme}) => css``}
`
<% } -%>
