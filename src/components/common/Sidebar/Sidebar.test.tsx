import renderer from 'react-test-renderer';

import { Sidebar, id } from './';

// ______________________________________________________
//
describe(id, () => {
  it('Snap Shot', () => {
    const component = renderer.create(<Sidebar />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
