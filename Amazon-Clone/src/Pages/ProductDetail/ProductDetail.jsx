import React, { useEffect, useState } from "react";
import Styles from "./ProductDetail.module.css";
import LayOut from "../../Componenets/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProducts] = useState({});
  useEffect(() => {
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <LayOut>
      <ProductCard product = {product}/>
    </LayOut>
  );
}

export default ProductDetail;
