import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import ProductCard from './ProductCard';
import Styles from './Product.module.css'
import Loader from '../Loader/Loader';
function Product() {
  const [products,setProducts] = useState();
  const [isLoading, setIsLoading] = useState(false)
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').then((res)=>{
      setProducts(res.data)
      isLoading(false)
    }).catch((err)=>{
      console.log(err);
      isLoading(false)
    })
  })
  return (
    <>
    {
      isLoading? (<Loader/>) :(<section className={Styles.product_container}>
      {
        products?.map((singleProduct)=>{
          return <ProductCard renderAdd={true} product={singleProduct} key={singleProduct.id}/>
        })
      }</section>)
    }
    </>
  )
}

export default Product
