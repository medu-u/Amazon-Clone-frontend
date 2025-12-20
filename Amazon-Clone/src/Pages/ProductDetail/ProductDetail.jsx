import React, { useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import Styles from "./ProductDetail.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../Components/Products/ProductCard";
import { productUrl } from "../../Api/endPoints";
import Loader from "../../Components/Loader/Loader";

function ProductDetail() {
  const { productId } = useParams();
  // console.log(productId);
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [productId]);
  console.log(product);
  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard product={product} flex={true} 
        renderDesc={true} />
      )}
    </LayOut>
  );
}

export default ProductDetail;
