import React, { useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import Styles from './Results.module.css'
import ProductCard from "../../Components/Products/ProductCard";
import Loader from "../../Components/Loader/Loader";

function Results() {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        isLoading(false)
      })
      .catch((err) => {
        console.log(err);
        isLoading(false)
      });
  }, []);

  return (
    <LayOut>
        <> {
            isLoading? (<Loader/>) : (<section>
                <h1 style={{ padding: "30px" }}>Results</h1>
                <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        
                <hr />
        
                <div className={Styles.product_container}>
                  {results?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </section> )
        }
        </>
    
    </LayOut>
  );
}

export default Results;
