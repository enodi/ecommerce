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
  console.log(loading, ">>>>loading", error, "<<<<<error", data);
  if (error) {
    return <div>Error</div>;
  }

  if (loading) {
    return (
      <div className="App">
        <h2>Loading...</h2>
      </div>
    );
  }
  if (data) {
    if (data.products.length > 0) {
      return (
        <div className="characters">
          {data.products.map((product) => (
            <div key={product.id} className="product">
              <img src={product.image_url} alt={product.title} />
              <p>{product.title}</p>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      );
    }
  }
};

export default Products;
