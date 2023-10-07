import { MemoryRouter as Router, Route } from 'react-router-dom';

import Provider from '../src/components/Provider';

export const parameters = {
  actions: { argTypesRegex: '^(on|handle)[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /(Date|At)$/,
    },
  },
  backgrounds: {
    values: [
      { name: 'white', value: '#fff' },
      { name: 'gray', value: '#f3f3f6' },
      { name: 'black', value: '#000' },
    ],
  },
  storyFilter: (storyData) => {
    return !storyData.type;
  },
  layout: 'fullscreen',
};

export const decorators = [
  (Story) => (
    <Provider>
      <Router>
        <Story />
      </Router>
    </Provider>
  ),
];
