import React from "react";

import CurrencySelector from "./CurrencySelector";
import { ReactComponent as RightArrow } from "../assets/right-arrow.svg";

const Sidebar = ({
  showSidebar,
  handleShowSidebar,
  itemInCart,
  decreaseCartItemCount,
  increaseCartItemCount,
  handleChangeCurrency,
  currency,
  removeItemFromCart,
  subtotal,
}) => (
  <div className={`cart-items ${showSidebar ? "show" : "hide"}`}>
    <div className="overlay" />
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar__top-section">
          <RightArrow
            style={{ width: 23, height: 23 }}
            onClick={handleShowSidebar}
            className="right-arrow"
          />
          <h4>your cart</h4>
        </div>
        <CurrencySelector
          handleChangeCurrency={handleChangeCurrency}
          currency={currency}
        />
      </div>
      <div className="sidebar-content">
        {itemInCart.length > 0 ? (
          itemInCart.map((item) => (
            <div key={`product-${item.id}`} className="sidebar__cart-item">
              <div>
                <p className="title">{item.title}</p>
                <button onClick={() => removeItemFromCart(item)}>X</button>
              </div>
              <div className="sidebar__cart-image-container">
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="sidebar__cart-image"
                />
              </div>
              <div>
                <div className="quantity-regulator">
                  <button onClick={() => decreaseCartItemCount(item)}>-</button>
                  <span>{item.count}</span>
                  <button onClick={() => increaseCartItemCount(item)}>+</button>
                </div>
                <p className="price">{`${currency} ${
                  item.price * item.count
                }.00`}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="empty-cart">There's no item in the cart</p>
        )}
      </div>
      {itemInCart.length > 0 && (
        <div className="sidebar__footer">
          <div className="sidebar__footer-price">
            <p>Subtotal</p>
            <p>{`${currency} ${subtotal}.00`}</p>
          </div>
          <div className="sidebar__footer-button">
            <button>revert to one time purchase</button>
            <button>proceed to checkout</button>
          </div>
        </div>
      )}
    </aside>
  </div>
);

export default Sidebar;
