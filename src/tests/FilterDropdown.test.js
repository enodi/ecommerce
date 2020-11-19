import React from "react";
import { shallow } from "enzyme";

import FilterDropdown from "../components/FilterDropdown";

let wrapper;
beforeEach(() => {
  wrapper = shallow(<FilterDropdown />);
});

test("should render FilterDropdown component correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should find first option rendered on dropdown", () => {
  expect(wrapper.find("option").first().text()).toEqual("Filter By");
});
