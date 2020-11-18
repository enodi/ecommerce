import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";

import Sidebar from "../components/Sidebar";
import Product from "../components/Product";
import Header from "../components/Header";
import Jumbotron from "../components/Jumbotron";

const GET_PRODUCTS = gql`
  query getProducts {
    products {
      id
      title
      price(currency: USD)
      image_url
    }
  }
`;

const ProductsPage = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [itemInCart, setItemInCart] = useState([]);
  const { loading, data } = useQuery(GET_PRODUCTS);

  const handleShowSidebar = () => setShowSidebar(!showSidebar);

  const handleCartCount = () => setCartCount(cartCount + 1);

  const handleCartItem = (item) => {
    const cartItem = [];
    handleCartCount();
    const exists = itemInCart.some((cart) => cart.id === item.id);
    exists ? setItemInCart(itemInCart) : addCartItem(cartItem, item);
  };

  const addCartItem = (cartItem, item) => {
    cartItem.push(item);
    setItemInCart([...itemInCart, ...cartItem]);
  };

  return (
    <div className="products-page">
      {loading ? (
        <div>loading....</div>
      ) : (
        <>
          <Header handleShowSidebar={handleShowSidebar} cartCount={cartCount} />
          <Jumbotron />
          <div className="products-container">
            {data &&
              data.products.length > 0 &&
              data.products.map((product) => (
                <Product
                  product={product}
                  key={product.id}
                  handleCartItem={handleCartItem}
                />
              ))}
          </div>
          <Sidebar
            showSidebar={showSidebar}
            handleShowSidebar={handleShowSidebar}
            itemInCart={itemInCart}
            cartCount={cartCount}
          />
        </>
      )}
    </div>
  );
};

export default ProductsPage;
