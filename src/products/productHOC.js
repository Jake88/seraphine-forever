import React from 'react'
import colours from 'utils/productColours'
import { consumeProducts } from 'contexts/products'

const ProductHOC = (Component, shopifyId, typesOfVinyl) => props => {
  const filteredTypes = colours.filter(colour => {
    let validFlag = true
    colour.types.forEach(type => {
      if (!typesOfVinyl.includes(type)) validFlag = false
    })
    return validFlag
  })

  return (
    <React.Fragment>
      {products => {
        let product = {}
        products.forEach(p => {
          if (p.id === shopifyId) {
            product = p
            return
          }
        })
        return <Component colours={filteredTypes} shopifyProduct={product} {...props} />
      }}
    </React.Fragment>
  )
}

export default consumeProducts(ProductHOC)
