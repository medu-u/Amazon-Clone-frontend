import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import styles from './Header.module.css';

function LowerHeader() {
  return (
    <div className={styles.lower_container}>
      <ul>
        <li>
          <AiOutlineMenu />
          <p>All</p>
        </li>
        <li>Todays Deals</li>
        <li>Prime Video</li>
        <li>Registry</li>
        <li>Gift Card</li>
        <li>Costomer Service</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}
export default LowerHeader;
