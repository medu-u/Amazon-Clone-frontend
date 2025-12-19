import React from "react";
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import styles from "./Header.module.css";
import LowerHeader from "./LowerHeader";


function Header() {
  return (
    <>
      <section>
        <div className={styles.header_container}>
          <div className={styles.logo_container}>
            {/* logo */}
            <a href="/">
              <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </a>
            {/* delivery */}
            <div className={styles.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          {/* search */}
          <div className={styles.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="Search Amazon" />
            {/* icon */}
            <BsSearch size={25} />
          </div>

          {/* right side */}
          <div className={styles.order_container}>
            <a href="" className={styles.language}>
              <img
                src="https://pngimg.com/uploads/flags/flags_PNG14592.png"
                alt="usa flag"
              />
              <select>
                <option value="EN">EN</option>
              </select>
            </a>
            {/* Three components */}
            <a href="" className={styles.account}>
              <p>Hello, Sign In</p>
              <span>Account & Lists</span>
              <select name="" id=""></select>
            </a>
            <a href="" className={styles.account}>
              <p>Returns</p>
              <span>& Orders</span>
            </a>
            <a href="" className={styles.cart}>
              <BiCart size={25} />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header;

