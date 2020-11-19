import React from "react";

const FilterDropdown = () => {
  return (
    <select className="filter-by" defaultValue="filter">
      <option disabled value="filter">
        Filter By
      </option>
      <option value="all">All Products</option>
      <option value="new">New Products</option>
      <option value="sets">Sets</option>
      <option value="skincare">Skincare</option>
      <option value="hair">Hair & Body Care</option>
    </select>
  );
};

export default FilterDropdown;
