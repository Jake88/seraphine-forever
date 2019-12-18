import React, { useReducer, useState, useEffect } from 'react'
import { Router } from "@reach/router"
import find from 'lodash/find'

import { withProducts } from 'contexts/products'
import { withLoader } from 'contexts/loader'
import orderReducer from 'products/order.reducer'

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
  let defaultState = {}


  useEffect(() => {
    if (products.length && !loadingMessages.includes(LOADING.PRODUCTS)) {
      const foundProduct = find(products, {config: { sfid: productId }})
      setSelectedProduct(foundProduct)
      defaultState = {
        config:   {...foundProduct.config},
        customOptions: {
          colours: {...foundProduct.config.colourConfig.defaultColours}
        }
      }
    }
  }, [productId, loadingMessages])


  const orderReducerInterface = useReducer(orderReducer, defaultState)

  if (!selectedProduct) return <Loader />

  return (
    <React.Fragment>
      Hellow World!
      <Router>
        <ProductDetailsPage path={PATHS.PRODUCT_DETAILS.relative} orderReducerInterface={orderReducerInterface} />
        <SvgEditorPage path={PATHS.COLOUR_PICKER.relative}  orderReducerInterface={orderReducerInterface} />
        <PersonaliserPage path={PATHS.PERSONALISE.relative}  orderReducerInterface={orderReducerInterface} />
        <ConfirmPage path={PATHS.CONFIRM.relative}  orderReducerInterface={orderReducerInterface} />
        <ThanksPage path={PATHS.THANKS.relative}  orderReducerInterface={orderReducerInterface} />
      </Router>
    </React.Fragment>
  )
}

export default withLoader(withProducts(OrderWrapper))
