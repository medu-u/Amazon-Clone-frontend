import React from "react";
import Styles from './Category.module.css'
import { Link } from "react-router-dom";

function CategoryCards({ data }) {
  console.log((data));
  return (
    <div className={Styles.category}>

      <a href="">
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt="" />
        <p>{data.description}</p>
      </a>

    </div>
  );
}

export default CategoryCards;
