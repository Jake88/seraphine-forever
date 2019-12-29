import React, { useEffect, useState } from 'react'
import Shopify from 'shopify-buy'

import { withLoader } from 'contexts/loader'
import { LOADING } from 'utils/loadingMessages'
import productConfigs from 'products'

import Image from 'assets/logoWithBackground.jpg'
import productsObject from './productsData'
const stubData = () => {
  console.log('Using product stub data', productsObject.products.edges)
  return productsObject.products.edges
}

const mapStubProducts = product => {
  let config = productConfigs[product.node.id]
  if (!config) {
    config = {}
    console.error(`No config found matching the Shopify product "${product.node.title}"`)
  }
  return {
    config,
    description: product.node.description,
    title: product.node.title,
    price: product.node.variants.edges[0].node.price,
    images: [{src: Image, altText: 'Stub image'}]
  }
}

const mapImages = image => ({
  src: image.attrs.src,
  altText: image.attrs.altText
})

// Map the graphModel from shopify to a model we can consume easier within our client.
const mapProduct = product => {
  let config = productConfigs[product.attrs.id.value]
  if (!config) {
    config = {}
    console.error(`No config found matching the Shopify product "${product.attrs.title.value}"`)
  }
  return {
    config,
    price: product.attrs.variants[0].attrs.price,
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
        // console.error(e)
        // setShopifyProducts([])
        setShopifyProducts(stubData().map(mapStubProducts))
        clearLoadingMessage(LOADING.PRODUCTS)
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
