import React from 'react'
import '../src/App.css'

const Price = ({priceData}) => {
  return (
    <p className={priceData>100 ? "red" : "green"}>
        {priceData}
    </p>
  )
}

export default Price