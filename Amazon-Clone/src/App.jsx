import React from "react";
import Routing from "./Router";
import Category from "./Componenets/Category/Category";
import Product from "./Componenets/Products/Product";
import Carousel from './Componenets/Carousel/CarouselEffect'

function App() {
  return (
    <>
      <Routing />
      <Carousel />
      <Category />
      <Product />
    </>
  );
}

export default App;
