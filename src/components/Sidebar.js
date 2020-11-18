import React from "react";

const Sidebar = ({ showSidebar, handleShowSidebar, itemInCart, cartCount }) => (
  <aside className={`sidebar ${showSidebar ? "show" : "hide"}`}>
    <h4>your cart</h4>
    <p onClick={handleShowSidebar}>hide</p>
    {itemInCart.length > 0 &&
      itemInCart.map((item) => (
        <div key={`product-${item.id}`} className="sidebar__cart-item">
          <div>
            <p>{item.title}</p>
            <button>X</button>
          </div>
          <div className="sidebar__cart-image-container">
            <img
              src={item.image_url}
              alt={item.title}
              className="sidebar__cart-image"
            />
          </div>
          <div>
            <div>
              <button>-</button>
              <span>{cartCount}</span>
              <button>+</button>
            </div>
            <p>{item.price}</p>
          </div>
        </div>
      ))}
  </aside>
);

export default Sidebar;
