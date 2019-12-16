import React, { useState, useEffect } from 'react'

const CartContext = React.createContext({})

export const ProvideCart = ({children}) => {
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
    <div>
      <CartContext.Provider value={cart}>
        {children}
      </CartContext.Provider>
    </div>
  )
}

export const withCart = Cmpt => props => (
  <CartContext.Consumer>
    {cart => <Cmpt cart={cart} {...props} />}
  </CartContext.Consumer>
)
