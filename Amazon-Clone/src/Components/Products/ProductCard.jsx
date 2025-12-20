import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import Styles from "./Product.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

function ProductCard({ product, flex, renderDesc }) {
  if (!product) return null;
  const { image, title, id, rating, price, description } = product;
  const [state, dispatch] = useContext(DataContext);


  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { image, title, id, rating, price, description },
    });
  };

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
        <h3>{title}</h3>
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
        <button className={Styles.button} onClick={addToCart}>
          add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
