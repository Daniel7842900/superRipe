import NavBar from "./NavBar";
import { shallow } from "enzyme";
import { findByTestAtrr } from "../../../utils/findByTestAttr";

const setUp = (props = {}) => {
  const component = shallow(<NavBar {...props} />);
  return component;
};

describe("<NavBar />", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("renders without crashing", () => {
    shallow(<NavBar />);
  });

  it("renders one nav bar", () => {
    const wrapper = findByTestAtrr(component, "nav-bar");
    expect(wrapper.length).toBe(1);
  });

  it("renders a brand logo", () => {
    const logo = findByTestAtrr(component, "navbar-brand-favicon");
    expect(logo.length).toBe(1);
  });

  it("renders a brand title", () => {
    const title = findByTestAtrr(component, "navbar-brand-title");
    expect(title.length).toBe(1);
  });
});
