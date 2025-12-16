import React from "react";
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import styles from "./Header.module.css";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <section>
        <div className={styles.header_container}>
          <div className={styles.logo_container}>
            {/* logo */}
            <Link to="/">
              <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>
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
            <Link to="" className={styles.language}>
              <img
                src="https://pngimg.com/uploads/flags/flags_PNG14592.png"
                alt="usa flag"
              />
              <select>
                <option value="EN">EN</option>
              </select>
            </Link>
            {/* Three components */}
            <Link to="/signin" className={styles.account}>
              <p>Hello, Sign In</p>
              <span>Account & Lists</span>
              <select name="" id=""></select>
            </Link>
            <Link href="/orders" className={styles.account}>
              <p>Returns</p>
              <span>& Orders</span>
            </Link>
            <a href="/cart" className={styles.cart}>
              <BiCart size={25} />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader/>
    </>
  );
}

export default Header;

