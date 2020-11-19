import React from "react";
import { shallow } from "enzyme";

import { cart } from "./fixtures";
import Product from "../components/Product";

let handleAddItemToCart, wrapper;
beforeEach(() => {
  handleAddItemToCart = jest.fn();
  wrapper = shallow(
    <Product
      handleAddItemToCart={handleAddItemToCart}
      currency="NGN"
      product={cart}
    />
  );
});

test("should render Product component correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should find text rendered on buttom", () => {
  expect(wrapper.find("button").text()).toEqual("Add to Cart");
});

test("should add to cart", () => {
  wrapper.find("button").simulate("click");
  expect(handleAddItemToCart).toHaveBeenCalled();
});
