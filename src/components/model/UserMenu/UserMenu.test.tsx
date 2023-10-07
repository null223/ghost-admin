import renderer from "react-test-renderer";
import { UserMenu, id } from "./";
// ______________________________________________________
//
describe(id, () => {
  it("Snap Shot", () => {
    const component = renderer.create(<UserMenu />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});