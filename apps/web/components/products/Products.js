/* eslint-disable @next/next/no-img-element */
'use client';
import React, {useEffect, useState} from 'react';
import Product from './Product';
import './product.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(result => setProducts(result.products))
      .catch(error => console.error(error))
  }, []);

  console.log('products: ', products);

  const onProductClick = (id) => {
    const foundProduct = products.find(item => item.id === id)
    setProduct({...foundProduct});
    console.log('foundProduct: ', foundProduct);
  }

  return <div className='product_wrapper'>
    <div className='products'>
      <h2>Products List</h2>
        {
          products.length > 0 && products.map((item) => {
            return <div className='product_row' key={item.id} onClick={() => onProductClick(item.id)}>
              <img width={80} height={80} src={item.thumbnail} alt={item.title} />
              <h2>{item.title}</h2>
            </div>
          })
        }
    </div>
    <Product product={product} />
  </div>
}

export default Products;