import React, { useReducer, useState, useEffect } from 'react'
import { Router } from "@reach/router"
import find from 'lodash/find'

import { withProducts } from 'contexts/products'
import { withLoader } from 'contexts/loader'
import orderReducer, { orderActions } from 'reducers/order.reducer'

import { LOADING } from 'utils/loadingMessages'
import { PATHS } from 'utils/paths'
import ProductDetailsPage from 'pages/order/productDetails'
import SvgEditorPage from 'pages/order/svgEditor'
import PersonaliserPage from 'pages/order/personaliser'
import ConfirmPage from 'pages/order/confirm'
import ThanksPage from 'pages/order/thanks'
import Loader from 'components/Loader'

const OrderWrapper = ({loadingMessages, products, productId}) => {
  const [selectedProduct, setSelectedProduct] = useState()
  const orderReducerInterface = useReducer(orderReducer, {})

  useEffect(() => {
    if (products.length && !loadingMessages.includes(LOADING.PRODUCTS)) {
      const foundProduct = find(products, {config: { sfid: productId }})
      setSelectedProduct(foundProduct)
      const newOrderState = {
        config:   {...foundProduct.config},
        customOptions: {
          colours: {...foundProduct.config.colourConfig.defaultColours},
          details: {}
        }
      }
      foundProduct.config.editableConfig.forEach(config => (newOrderState.customOptions.details[config.key] = config.defaultValue))
      orderReducerInterface[1](orderActions.overwriteState(newOrderState))
       
    }
  }, [productId, products, loadingMessages])

  if (!selectedProduct) return <Loader />

  return (
    <Router>
      <ProductDetailsPage
        path={PATHS.PRODUCT_DETAILS.relative}
        product={selectedProduct}
      />
      <SvgEditorPage
        path={PATHS.COLOUR_PICKER.relative} 
        orderReducerInterface={orderReducerInterface}
        product={selectedProduct}
      />
      <PersonaliserPage
        path={PATHS.PERSONALISE.relative} 
        orderReducerInterface={orderReducerInterface}
        product={selectedProduct}
      />
      <ConfirmPage
        path={PATHS.CONFIRM.relative} 
        orderReducerInterface={orderReducerInterface}
        product={selectedProduct}
      />
      <ThanksPage
        path={PATHS.THANKS.relative} 
        orderReducerInterface={orderReducerInterface}
        product={selectedProduct}
      />
    </Router>
  )
}

export default withLoader(withProducts(OrderWrapper))
