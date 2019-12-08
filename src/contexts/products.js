import React, { useEffect, useState } from 'react'

import Shopify from 'shopify-buy'

const shopifyClient = Shopify.buildClient({
  domain: `seraphine-forever.myshopify.com`,
  storefrontAccessToken: `563c2502ed08b7c8eb18d5c1872f8d8c`
})

const ProductsContext = React.createContext([])

export const ProvideProducts = ({children}) => {
  const [shopifyProducts, setShopifyProducts] = useState([])

  useEffect(() => {
    shopifyClient.product.fetchAll().then(setShopifyProducts)
  }, [])

  return (
    <ProductsContext.Provider value={shopifyProducts}>
      {children}
    </ProductsContext.Provider>
  )
}

export const consumeProducts = Cmpt => props => (
  <div>
    <ProductsContext.Consumer>
      {products => <Cmpt products={products} {...props} />}
    </ProductsContext.Consumer>
  </div>
)
