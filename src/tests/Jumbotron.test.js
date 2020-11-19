import React from "react";
import { shallow } from "enzyme";

import Jumbotron from "../components/Jumbotron";

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Jumbotron />);
});

test("should render Jumbotron component correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should find text rendered on Jumbotron", () => {
  expect(wrapper.find("h2").text()).toEqual("All Products");
});
