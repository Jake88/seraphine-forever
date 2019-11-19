import React, { useState } from 'react'

import SVG from './svg'
import productHOC from 'products/productHOC'
import ProductTemplate from 'products/ProductTemplate'
import { VINYL_TYPES } from 'utils/productColours'

const productConfig = {
  shopifyId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzM5MzE1MjkyNDg4NTY=',
  title: 'Baby Birth Pillow',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  price: 40
}

const Product1 = ({ colours, shopifyProduct }) => {
  const colourStates = [
    useState(colours[0].hex),
    useState(colours[1].hex)
  ]

  let imageSources = []
  if (shopifyProduct.images) {
    imageSources = shopifyProduct.images.map(img => img.src)
  }
  console.log(shopifyProduct)

  const props = {productConfig, shopifyProduct, imageSources, colours, colourStates}

  return (
    <ProductTemplate Svg={SVG} {...props}>
      Insert a form to handle all the options for the this pattern. IE custom name, weight time etc
    </ProductTemplate>
  )
}

export default productHOC(Product1, productConfig.shopifyId, [VINYL_TYPES.GLITTER])
