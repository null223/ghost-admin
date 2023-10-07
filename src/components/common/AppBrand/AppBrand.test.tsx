import renderer from "react-test-renderer";
import { AppBrand, id } from "./";
// ______________________________________________________
//
describe(id, () => {
  it("Snap Shot", () => {
    const component = renderer.create(<AppBrand />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});