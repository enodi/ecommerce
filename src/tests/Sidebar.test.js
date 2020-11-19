import React from "react";
import { shallow } from "enzyme";

import { cart } from "./fixtures";
import Sidebar from "../components/Sidebar";

let handleShowSidebar,
  decreaseCartItemCount,
  increaseCartItemCount,
  handleChangeCurrency,
  removeItemFromCart,
  wrapper;
beforeEach(() => {
  handleShowSidebar = jest.fn();
  decreaseCartItemCount = jest.fn();
  increaseCartItemCount = jest.fn();
  handleChangeCurrency = jest.fn();
  removeItemFromCart = jest.fn();
  wrapper = shallow(
    <Sidebar
      showSidebar={true}
      handleShowSidebar={handleShowSidebar}
      itemInCart={cart}
      decreaseCartItemCount={decreaseCartItemCount}
      increaseCartItemCount={increaseCartItemCount}
      handleChangeCurrency={handleChangeCurrency}
      currency="NGN"
      removeItemFromCart={removeItemFromCart}
      subtotal={19400}
    />
  );
});

test("should render Sidebar component correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should find text rendered on sidebar", () => {
  expect(wrapper.find("h4").text()).toEqual("your cart");
});

test("should remove item from cart", () => {
  wrapper.find("button").first().simulate("click");
  expect(removeItemFromCart).toHaveBeenCalled();
});
