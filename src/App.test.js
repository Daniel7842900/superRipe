import App from "./App";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  // shallow only checks App component, not child component belongs to App component.
  shallow(<App />);
});
