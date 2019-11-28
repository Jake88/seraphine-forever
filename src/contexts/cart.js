import React, { useState, useEffect } from 'react'

const CartContext = React.createContext({})

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState({})

  const addToCart = item => {
    setCart({
      addToCart,
      items: [...cart.items, item]
    })
  }

  useEffect(() => {
    setCart({
      addToCart,
      items: []
    })
  }, [])

  return (
    <CartContext.Provider value={cart}>
      {children}
    </CartContext.Provider>
  )
}

export const consumeCart = Cmpt => props => (
  <CartContext.Consumer>
    {cart => <Cmpt cart={cart} {...props} />}
  </CartContext.Consumer>
)
