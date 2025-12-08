import React from 'react'

function CategoryCards({data}) {
  return (
    <div>
      <a href="">
        <span>
            <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt="" />
      </a>
    </div>
  )
}

export default CategoryCards
