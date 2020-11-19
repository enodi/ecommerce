import React, { useState, useEffect } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";

import Sidebar from "../components/Sidebar";
import Product from "../components/Product";
import Header from "../components/Header";
import Jumbotron from "../components/Jumbotron";

const GET_PRODUCTS = gql`
  query getProducts($currency: Currency) {
    products {
      id
      title
      price(currency: $currency)
      image_url
    }
  }
`;

const ProductsPage = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [itemInCart, setItemInCart] = useState([]);
  const [currency, setCurrency] = useState("NGN");
  const [subtotal, setSubtotal] = useState(0);
  const { data } = useQuery(GET_PRODUCTS, {
    variables: { currency },
  });
  const allProducts = data && data.products;
  const cartItems = JSON.stringify(itemInCart);
  const products = JSON.stringify(allProducts);

  useEffect(() => {
    const item = localStorage.getItem("cart");
    const count = localStorage.getItem("cartCount");
    item && setItemInCart(JSON.parse(item));
    count && setCartCount(count);
  }, []);

  useEffect(() => {
    updateCartItem();
  }, [currency, cartItems, products, cartCount]);

  const updateCartItem = () => {
    const mergedItem = [];
    data &&
      data?.products.map((item) => {
        return itemInCart.find((product) => {
          if (product.id === item.id) {
            item.count = product.count;
            mergedItem.push(item);
          }
          return setItemInCart(mergedItem);
        });
      });
    const amount = itemInCart.reduce(
      (acc, currentValue) => acc + currentValue.price * currentValue.count,
      0
    );
    setSubtotal(amount);
  };

  const handleShowSidebar = () => setShowSidebar(!showSidebar);

  const increaseCartCount = () => setCartCount(cartCount + 1);

  const decreaseCartCount = (count = 1) => setCartCount(cartCount - count);

  const handleChangeCurrency = (event) => setCurrency(event.target.value);

  const handleAddItemToCart = (item) => {
    setShowSidebar(true);
    const cartItem = [];
    increaseCartCount();
    const itemExists = itemInCart.some((cart) => cart.id === item.id);
    itemExists ? setExistingCartItem(item) : addCartItem(cartItem, item);
    localStorage.setItem("cartCount", cartCount + 1);
  };

  const setExistingCartItem = (item) => {
    const foundProduct = itemInCart.find((product) => product.id === item.id);
    foundProduct.count++;
    setItemInCart(itemInCart);
    localStorage.setItem("cart", JSON.stringify(itemInCart));
  };

  const addCartItem = (cartItem, item) => {
    item.count = 1;
    cartItem.push(item);
    const cart = [...itemInCart, ...cartItem];
    setItemInCart([...itemInCart, ...cartItem]);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const decreaseCartItemCount = (item) => {
    const cartItem = [];
    item.count--;

    if (item.count > 0) {
      cartItem.push(item);
      const mergedItem = itemInCart.map(
        (item) => cartItem.find((product) => product.id === item.id) || item
      );
      setItemInCart(mergedItem);
      localStorage.setItem("cart", JSON.stringify(mergedItem));
    } else {
      const filteredItem = itemInCart.filter((cart) => cart.id !== item.id);
      setItemInCart(filteredItem);
      localStorage.setItem("cart", JSON.stringify(filteredItem));
    }
    decreaseCartCount();
    localStorage.setItem("cartCount", cartCount - 1);
  };

  const increaseCartItemCount = (item) => {
    const cartItem = [];
    item.count++;

    if (item.count > 0) {
      cartItem.push(item);
      const mergedItem = itemInCart.map(
        (cart) => cartItem.find((product) => product.id === cart.id) || cart
      );
      setItemInCart(mergedItem);
      localStorage.setItem("cart", JSON.stringify(mergedItem));
    } else {
      const filteredItem = itemInCart.filter((cart) => cart.id !== item.id);
      setItemInCart(filteredItem);
      localStorage.setItem("cart", JSON.stringify(filteredItem));
    }
    increaseCartCount();
    localStorage.setItem("cartCount", cartCount + 1);
  };

  const removeItemFromCart = (item) => {
    const quantity = item.count;
    const filteredItem = itemInCart.filter((cart) => cart.id !== item.id);
    setItemInCart(filteredItem);
    decreaseCartCount(quantity);
    localStorage.setItem("cart", JSON.stringify(filteredItem));
    localStorage.setItem("cartCount", cartCount - quantity);
  };

  return (
    <div className="product-page">
      <Header handleShowSidebar={handleShowSidebar} cartCount={cartCount} />
      <Jumbotron />
      <div className="products">
        <div className="products-container">
          {data &&
            data.products.length > 0 &&
            data.products.map((product) => (
              <Product
                product={product}
                key={product.id}
                handleAddItemToCart={handleAddItemToCart}
                currency={currency}
              />
            ))}
        </div>
      </div>
      <Sidebar
        showSidebar={showSidebar}
        handleShowSidebar={handleShowSidebar}
        itemInCart={itemInCart}
        decreaseCartItemCount={decreaseCartItemCount}
        increaseCartItemCount={increaseCartItemCount}
        handleChangeCurrency={handleChangeCurrency}
        currency={currency}
        removeItemFromCart={removeItemFromCart}
        subtotal={subtotal}
      />
    </div>
  );
};

export default ProductsPage;
