import React, { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import styles from "./Header.module.css";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";

function Header() {

const [{basket},dispatch]=useContext(DataContext)
const totalItem= basket?.reduce((amount,item)=>{
  return item.amount + amount
}, 0)

  return (
    <section className={styles.fixed}>
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
            <Link to="/auth" className={styles.account}>
              <p>Hello, Sign In</p>
              <span>Account & Lists</span>
              <select name="" id=""></select>
            </Link>
            <Link to="/orders" className={styles.account}>
              <p>Returns</p>
              <span>& Orders</span>
            </Link>
            <Link to="/cart" className={styles.cart}>
              <BiCart size={40} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header;
