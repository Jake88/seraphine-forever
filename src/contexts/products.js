import React, { useEffect, useState } from 'react'
import Shopify from 'shopify-buy'

import { withLoader } from 'contexts/loader'
import { LOADING } from 'utils/loadingMessages'
import productConfigs from 'products'

export const mapImages = image => ({
  src: image.attrs.src,
  altText: image.attrs.altText
})

// Map the graphModel from shopify to a model we can consume easier within our client.
export const mapProduct = product => {
  let config = productConfigs[product.attrs.id.value]
  if (!config) {
    config = {}
    console.error(`No config found matching the Shopify product "${product.attrs.title.value}"`)
  }
  return {
    config,
    description: product.attrs.description.value,
    title: product.attrs.title.value,
    images: product.attrs.images.map(mapImages)
  }
}

const shopifyClient = Shopify.buildClient({
  domain: `seraphine-forever.myshopify.com`,
  storefrontAccessToken: `563c2502ed08b7c8eb18d5c1872f8d8c`
})

export const useProducts = (setLoadingMessage, clearLoadingMessage) => {
  const [shopifyProducts, setShopifyProducts] = useState([])

  useEffect(() => {
    setLoadingMessage(LOADING.PRODUCTS)
    shopifyClient.product.fetchAll()
      .then(res => {
        setShopifyProducts(res.map(mapProduct))
        clearLoadingMessage(LOADING.PRODUCTS)
      })
      .catch(e => {
        console.error('Fetching products failed')
        console.error(e)
        setShopifyProducts([])
      })
  }, [clearLoadingMessage, setLoadingMessage])

  return shopifyProducts
}

export const ProductsContext = React.createContext([])

export const ProvideProducts = withLoader(({setLoadingMessage, clearLoadingMessage, children}) => {
  const shopifyProducts = useProducts(setLoadingMessage, clearLoadingMessage)

  return (
    <ProductsContext.Provider value={shopifyProducts}>
      {children}
    </ProductsContext.Provider>
  )
})

export const withProducts = Cmpt => props => (
  <ProductsContext.Consumer>
    {products => <Cmpt products={products} {...props} />}
  </ProductsContext.Consumer>
)
