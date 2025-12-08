import React from 'react'
import {categoryInfos} from './CategoryFullInfos';
import CategoryCards from './CategoryCards'

function Category() {
  return (
    <section>
        {
         categoryInfos.map((infos)=>{
            <CategoryCards data ={infos}/>
         })   
        }
    </section>
  )
}

export default Category
