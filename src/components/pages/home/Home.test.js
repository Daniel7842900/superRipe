import Home from "./Home";
import { shallow } from "enzyme";
import { findByTestAtrr } from "../../../utils/findByTestAttr";

const setUp = (props = {}) => {
  const component = shallow(<Home {...props} />);
  return component;
};

describe("<Home />", () => {
  describe("Have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        value: "test value",
        onChange: jest.fn(),
        onSearch: jest.fn(),
      };
      wrapper = setUp(props);
    });

    it("should render without errors", () => {
      const component = findByTestAtrr(wrapper, "homeComponent");
      expect(component.length).toBe(1);
    });

    it("should render header component", () => {
      const header = findByTestAtrr(wrapper, "headerComponent");
      expect(header.length).toBe(1);
    });

    it("should render first banner", () => {
      const firstBanner = findByTestAtrr(wrapper, "first-banner");
      expect(firstBanner.length).toBe(1);
    });

    // it("should render searchBox component", () => {
    //   const searchBox = findByTestAtrr(wrapper, "searchBoxComponent");
    //   expect(searchBox.length).toBe(1);
    // });

    it("should render how component", () => {
      const how = findByTestAtrr(wrapper, "howComponent");
      expect(how.length).toBe(1);
    });

    it("should render second banner", () => {
      const secondBanner = findByTestAtrr(wrapper, "second-banner");
      expect(secondBanner.length).toBe(1);
    });

    it("should render why component", () => {
      const why = findByTestAtrr(wrapper, "whyComponent");
      expect(why.length).toBe(1);
    });

    it("should render third banner", () => {
      const thirdBanner = findByTestAtrr(wrapper, "third-banner");
      expect(thirdBanner.length).toBe(1);
    });

    it("should render about component", () => {
      const about = findByTestAtrr(wrapper, "aboutComponent");
      expect(about.length).toBe(1);
    });

    it("should render footer component", () => {
      const footer = findByTestAtrr(wrapper, "footerComponent");
      expect(footer.length).toBe(1);
    });
  });

  // describe("Have NO props", () => {
  //   let wrapper;
  //   beforeEach(() => {
  //     wrapper = setUp();
  //   });

  //   it("should not render", () => {
  //     const component = findByTestAtrr(wrapper, "homeComponent");
  //     expect(component.length).toBe(0);
  //   });
  // });
});
