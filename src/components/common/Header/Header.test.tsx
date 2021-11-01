import renderer from 'react-test-renderer';

import { Header, id } from './';

// ______________________________________________________
//
describe(id, () => {
  it('Snap Shot', () => {
    const component = renderer.create(<Header />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
