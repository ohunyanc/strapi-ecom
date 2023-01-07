import React from "react";
import "./featuredProducts.scss";
import Card from "../card/Card";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          debitis earum, rerum accusantium quae architecto assumenda dolorem
          libero perspiciatis ea voluptatibus odit? Aperiam esse aliquid non at
          animi optio rem!
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something Went Wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
