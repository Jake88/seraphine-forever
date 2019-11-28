import React from 'react'

const CartContext = React.createContext([])

export const CartProvider = ({cart, children}) => (
  <CartContext.Provider value={cart}>
    {children}
  </CartContext.Provider>
)

export const consumeCart = Cmpt => props => (
  <CartContext.Consumer>
    {cart => <Cmpt cart={cart} {...props} />}
  </CartContext.Consumer>
)
