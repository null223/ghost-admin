import renderer from "react-test-renderer";
import { AppTitle, id } from "./";
// ______________________________________________________
//
describe(id, () => {
  it("Snap Shot", () => {
    const component = renderer.create(<AppTitle />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});