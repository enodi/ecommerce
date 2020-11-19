import React from "react";
import Skeleton from "react-loading-skeleton";

const Loader = () => (
  <div style={{ fontSize: 20, lineHeight: 2 }}>
    <h1>{<Skeleton />}</h1>
    {<Skeleton count={4} />}
  </div>
);

export default Loader;
