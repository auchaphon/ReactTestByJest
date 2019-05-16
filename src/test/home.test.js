import React from "react";
import { shallow } from "enzyme";
import Home from "../components/home/index.js";

it("Should be find element correctly ", () => {
  const props = {
    header: "Auchaphon",
    body: "Auchaphon Body"
  };
  const wrapper = shallow(<Home {...props} />);
  expect(wrapper).toMatchSnapshot();
});
