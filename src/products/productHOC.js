import React from 'react'
import colours from 'utils/productColours'
import {ShopifyContext} from 'App'

export default (Component, shopifyId, typesOfVinyl) => props => {
  const filteredTypes = colours.filter(colour => {
    let validFlag = true
    colour.types.forEach(type => {
      if (!typesOfVinyl.includes(type)) validFlag = false
    })
    return validFlag
  })

  return (
    <ShopifyContext.Consumer>
      {products => {
        let product = {}
        console.log('asdasdasd',products)
        products.forEach(p => {
          if (p.id === shopifyId) {
            product = p
            return
          }
        })
        console.log('zxzxczxc',product)
        return <Component colours={filteredTypes} shopifyProduct={product} {...props} />
      }}
    </ShopifyContext.Consumer>
  )
}
