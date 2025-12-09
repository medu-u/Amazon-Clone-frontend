import React from "react";
import styles from './Category.module.css'

function CategoryCards({ data }) {
  return (
    <div className={styles.category}>
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
