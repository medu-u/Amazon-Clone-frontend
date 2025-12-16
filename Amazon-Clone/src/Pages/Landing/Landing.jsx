import React from "react";
import LayOut from "../../Componenets/Layout/Layout";
import { Carousel } from "react-responsive-carousel";
import Category from "../../Componenets/Category/Category";
import Product from "../../Componenets/Products/Product";

function Landing() {
  return (
    <LayOut>
      <Carousel />
      <Category />
      <Product />
    </LayOut>
  );
}

export default Landing;
