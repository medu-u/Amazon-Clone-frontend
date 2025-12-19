import React from "react";
import Rating from '@mui/material/Rating'
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import Styles from './Product.module.css'

function ProductCard({product}) {
  const {image, title, id, rating, price}=product;
  return (
    <div className={`${Styles.card_container}`}>
      <a href="">
        <img src={image} alt="" />
      </a>
      <div>
        <h2>{title}</h2>
        <div className={Styles.rating}>
          {/* rating */}
          <Rating value={rating.rate} precision={0.1} />
          {/* count */}
          <small>{rating.count}</small>
        </div>
        <div className={Styles.price}><CurrencyFormat amount={price}/></div>
      </div>
      <button className={Styles.button}>add to Cart</button>
    </div>
  );
}

export default ProductCard;
