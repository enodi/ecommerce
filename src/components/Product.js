import React from "react";

const Product = ({ product, handleAddItemToCart, currency }) => (
  <div className="product__item">
    <img
      src={product.image_url}
      alt={product.title}
      className="product__image"
    />
    <p>{product.title}</p>
    <p>{`From: ${currency} ${product.price}.00`}</p>
    <button
      onClick={() => handleAddItemToCart(product)}
      className="product__cart"
    >
      Add to Cart
    </button>
  </div>
);

export default Product;
