import * as HeaderStories from './Header.stories.jsx';
import { Page } from './Page.jsx';

export default {
  component: Page,
};

export const LoggedIn = { args: HeaderStories.LoggedIn.args };

export const LoggedOut = { args: HeaderStories.LoggedOut.args };
