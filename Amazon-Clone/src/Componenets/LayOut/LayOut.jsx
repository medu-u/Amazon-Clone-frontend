import React from 'react'
import Header from '../Header/Header'

function LayOut({Children}) {
  return (
    <>
      <Header/>
      {Children}
      
    </>
  )
}

export default LayOut
