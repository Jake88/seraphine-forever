import React from 'react'
import styled from 'styled-components'

import { withProducts } from 'contexts/products'

import Loader from 'components/Loader'
import ProductThumbnail from 'components/ProductThumbnail'


const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Products = ({products}) => {
  if (!products.length) return <Loader />

  return (
    <ProductList>
      {products.map((product, index) => (
        <ProductThumbnail
          key={`${product.config.id}_${index}`}
          product={product}
          />
      ))}
    </ProductList>
)}

export default withProducts(Products)
