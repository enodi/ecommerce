import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Cart } from "../assets/shopping-cart.svg";
import { ReactComponent as HamburgerIcon } from "../assets/hamburger.svg";
import logo from "../assets/logo.png";

const Header = ({ handleShowSidebar, cartCount }) => (
  <header>
    <div className="header-container">
      <HamburgerIcon style={{ width: 23, height: 23 }} className="hamburger" />
      <ul className="logo-section">
        <li className="logo-container">
          <Link to="/">
            <img src={logo} alt="lumin logo" className="logo" />
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          <Link to="/">Help</Link>
        </li>
        <li>
          <Link to="/">Blog</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/">Account</Link>
        </li>
        <li onClick={handleShowSidebar} className="cart">
          <Cart style={{ width: 23, height: 23 }} />
          <span className="cart--count">{cartCount}</span>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
