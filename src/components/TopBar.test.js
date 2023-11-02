import { TopBar } from "./TopBar";
import { shallow } from "enzyme";

test("topbar component", () => {
  const component = shallow(<TopBar />);
  expect(component).toMatchSnapshot();
});
