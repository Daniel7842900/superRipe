import { shallow } from "enzyme";
import SearchBox from "./SearchBox";

describe("<SearchBox />", () => {
  it("renders without crashing", () => {
    // shallow only checks App component, not child component belongs to App component.
    shallow(<SearchBox />);
  });

  // it("has an input field", () => {
  //   let wrapper = shallow(<SearchBox />);
  //   const input = wrapper.find(".search-input").at(1);
  //   console.log(wrapper.debug());
  //   expect(input.props().value).toBe("");
  // });
});
