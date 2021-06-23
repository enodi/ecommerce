import React from "react";

import FilterDropdown from "./FilterDropdown";

const Jumbotron = () => (
  <section className="jumbotron">
    <div>
      <h2>All Products</h2>
      <p>A 360° look</p>
    </div>
    <FilterDropdown />
  </section>
);

export default Jumbotron;
