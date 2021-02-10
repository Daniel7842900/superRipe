import App from "./App";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  // shallow only checks App component, not child component belongs to App component.
  shallow(<App />);
});
