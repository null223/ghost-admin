---
to: <%= abs_path %>/<%= component_name %>.test.tsx
---
import renderer from "react-test-renderer";
import { <%= component_name %>, id } from "./";
// ______________________________________________________
//
describe(id, () => {
  it("Snap Shot", () => {
    const component = renderer.create(<<%= component_name %> />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});