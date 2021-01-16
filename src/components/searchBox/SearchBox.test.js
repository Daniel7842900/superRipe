import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import SearchBox from "./SearchBox";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  // shallow only checks App component, not child component belongs to App component.
  shallow(<SearchBox />);
});
