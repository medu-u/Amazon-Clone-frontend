import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import ProductCard from './ProductCard';
import Styles from './Product.module.css'
function Product() {
  const [products,setProducts] = useState();
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').then((res)=>{
      setProducts(res.data)
    }).catch((err)=>{
      console.log(err);
    })
  })
  return (
    <section className={Styles.product_container}>
      {
        products?.map((singleProduct)=>{
          return <ProductCard product={singleProduct} key={singleProduct.id}/>
        })
      }
    </section>
  )
}

export default Product
