import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";

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

const Products = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  return (
    <div className="products-container">
      {data &&
        data.products.length > 0 &&
        data.products.map((product) => (
          <div key={product.id} className="product__item">
            <img
              src={product.image_url}
              alt={product.title}
              className="product__image"
            />
            <p>{product.title}</p>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
    </div>
  );
};

export default Products;
