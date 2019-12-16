import React, { useReducer } from 'react'
import { Router } from "@reach/router"

import orderReducer from 'products/order.reducer'

import { BirthPillowConfig } from 'products/BirthPillow/config'

export default ({product, location, children}) => {
  console.log('asdasdasd', location)
  const defaultState = {
    config:   {...BirthPillowConfig},
    customOptions: {
      colours: {...BirthPillowConfig.colourConfig.defaultColours}
    }
  }

  const orderReducerInterface = useReducer(orderReducer, defaultState)
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  )
}
