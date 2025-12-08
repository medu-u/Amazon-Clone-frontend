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
      <LowerHeader/>
    </>
  );
}

export default Header;

// import React from "react";
// import styles from "./Header.module.css";

// import { SlLocationPin } from "react-icons/sl";
// import { BsSearch } from "react-icons/bs";
// import { FaShoppingCart } from "react-icons/fa";

// export default function Header() {
//   return (
//     <header className={styles.header}>
//       <div className={styles.container}>
//         {/* LEFT SECTION */}
//         <div className={styles.left}>
//           {/* Logo */}
//           <a href="/">
//             <img
//               src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
//               alt="Amazon logo"
//               className={styles.logo}
//             />
//           </a>

//           {/* Location */}
//           <div className={styles.location}>
//             <SlLocationPin size={18} />
//             <div>
//               <p className={styles.smallText}>Deliver to</p>
//               <span className={styles.boldText}>Ethiopia</span>
//             </div>
//           </div>
//         </div>

//         {/* SEARCH BAR */}
//         <div className={styles.searchBar}>
//           <select className={styles.searchSelect}>
//             <option value="">All</option>
//           </select>

//           <input
//             type="text"
//             placeholder="Search Amazon"
//             className={styles.searchInput}
//           />

//           <button className={styles.searchButton}>
//             <BsSearch size={20} />
//           </button>
//         </div>

//         {/* RIGHT SECTION */}
//         <div className={styles.right}>
//           {/* Language */}
//           <div className={styles.language}>
//             <img
//               src="https://pngimg.com/uploads/flags/flags_PNG14592.png"
//               alt="Flag"
//               className={styles.flag}
//             />
//             <select className={styles.langSelect}>
//               <option value="EN">EN</option>
//             </select>
//           </div>

//           {/* Account */}
//           <a href="#" className={styles.link}>
//             <p className={styles.smallText}>Hello, Sign in</p>
//             <span className={styles.boldText}>Account & Lists</span>
//           </a>

//           {/* Orders */}
//           <a href="#" className={styles.link}>
//             <p className={styles.smallText}>Returns</p>
//             <span className={styles.boldText}>& Orders</span>
//           </a>

//           {/* Cart */}
//           <a href="/cart" className={styles.cart}>
//             <FaShoppingCart size={28} />
//             <span className={styles.cartCount}>0</span>
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// }
