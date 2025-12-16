import React from "react";
import Styles from './Category.module.css'
import { Link } from "react-router-dom";

function CategoryCards({ data }) {
  return (
    <div className={Styles.category}>
      <Link to={`/category/${data.name}`}>
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt="" />
        <p>{data.description}</p>
      </Link>
    </div>
  );
}

export default CategoryCards;
