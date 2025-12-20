import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import Styles from "./Product.module.css";
import { Link } from "react-router-dom";

function ProductCard({ product, flex, renderDesc }) {
  if (!product) return null;
  const {
    image,
    title,
    id,
    rating = { rate: 0, count: 0 },
    price,
    description,
  } = product;
  return (
    <div
      className={`${Styles.card_container}  ${
        flex ? Styles.product_flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" className={Styles.img_container} />
      </Link>
      <div>
        <h2>{title}</h2>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div className={Styles.rating}>
          {/* rating */}
          <Rating value={rating?.rate} precision={0.1} readOnly />
          {/* count */}
          <small>{rating?.count}</small>
        </div>
        <div className={Styles.price}>
          <CurrencyFormat amount={price} />
        </div>
        <button className={Styles.button}>add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
