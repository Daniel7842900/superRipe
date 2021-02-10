import Footer from "./Footer";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("<Footer />", () => {
  it("renders without crashing", () => {
    shallow(<Footer />);
  });

  it("matches snapshot", () => {
    const wrapper = shallow(<Footer />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
