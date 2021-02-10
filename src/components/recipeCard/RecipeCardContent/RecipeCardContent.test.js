import RecipeCardContent from "./RecipeCardContent";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "../../../utils/testUtil";

const setUp = (props = {}) => {
  const component = shallow(<RecipeCardContent {...props} />);
  return component;
};

describe("<RecipeCardContent />", () => {
  describe("Checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        paginatedRecipes: [],
      };
      const propsErr = checkProps(RecipeCardContent, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  //   describe("Have props", () => {
  //     let wrapper;
  //     beforeEach(() => {
  //       const props = {
  //         paginatedRecipes: [],
  //       };
  //       wrapper = setUp(props);
  //     });
  //   });
});
