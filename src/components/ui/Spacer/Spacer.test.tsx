import renderer from "react-test-renderer";
import { Spacer, id } from "./";
// ______________________________________________________
//
describe(id, () => {
  it("Snap Shot", () => {
    const component = renderer.create(<Spacer />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});