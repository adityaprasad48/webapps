/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Product = ({product}) => {
  if(!product) return null;

  return (
    <div className="product">
      <h3>Product Detail</h3>
      <h2>{product && product.title}</h2>
      <img src={product && Array.isArray(product.images) && product.images[0]} alt="" />
    </div>
  )
}

export default Product