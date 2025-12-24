import React, { useContext, useEffect } from "react";
import Styles from "./Orders.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { db } from "../../Utility/firebase";
import { DataContext } from "../../Components/DataProvider/DataProvider";



function Orders() {
  const [{user}, dispatch]=useContext(DataContext);

useEffect(()=>{

}, []);

  return (
    <LayOut>
     <section className={Styles.container}>
      <div className={Styles.orders_container}>
        <h2>Your Orders</h2>
        <div>

        </div>
      </div>
     </section>
    </LayOut>
  );
}

export default Orders;
