import React from "react";
import { shallow } from "enzyme";

import Header from "../components/Header";

let handleShowSidebar, wrapper;
beforeEach(() => {
  handleShowSidebar = jest.fn();
  wrapper = shallow(
    <Header handleShowSidebar={handleShowSidebar} cartCount={4} />
  );
});

test("should render Header component correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should find last text rendered on header", () => {
  expect(wrapper.find("ul").first().find("li").last().text()).toEqual("Blog");
});
