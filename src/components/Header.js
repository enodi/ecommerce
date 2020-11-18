import React from "react";
import { Link } from "react-router-dom";

const Header = ({ handleShowSidebar, cartCount }) => (
  <header>
    <ul>
      <li>
        <Link to="/">Lumin</Link>
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
      <li onClick={handleShowSidebar}>{`Cart ${cartCount}`}</li>
    </ul>
  </header>
);

export default Header;
