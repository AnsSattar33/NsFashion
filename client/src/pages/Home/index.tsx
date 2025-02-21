import React from "react";
import Slider from "./Layout/Slider";
import FeatureProducts from "./Layout/ProductsFeature/FeatureProducts";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <Slider />
      <FeatureProducts />
    </div>
  );
};

export default Home;
