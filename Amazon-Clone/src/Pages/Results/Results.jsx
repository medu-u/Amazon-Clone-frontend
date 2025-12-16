import React, { useEffect, useState } from 'react'
import Styles from './Results.module.css'
import LayOut from '../../Componenets/Layout/Layout';
import{useParams} from 'react-router-dom'
import axios from 'axios';
import { productUrl } from '../../Api/endPoints';

function Results() {
    const [results, setResults]= useState([]);
    useEffect(()=>{
    const {categoryName} = useParams()
    axios.get(`${productUrl}/products/category/${category}`)
    .then((res)=>{
        setResults(res.data)
    }).catch((err)=>{
        console.log(err);
    })
}, [])
  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />

        <div className={Styles.products_container}>
          {results?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </LayOut>
  );
}

export default Results
