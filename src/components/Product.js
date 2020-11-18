import React from "react";

const Product = ({ product, handleCartItem }) => (
  <div className="product__item">
    <img
      src={product.image_url}
      alt={product.title}
      className="product__image"
    />
    <p>{product.title}</p>
    <p>{product.price}</p>
    <button onClick={() => handleCartItem(product)}>Add to Cart</button>
  </div>
);

export default Product;
