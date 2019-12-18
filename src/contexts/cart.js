import React, { useState } from 'react'

const CartContext = React.createContext({})

export const ProvideCart = ({children}) => {
  const [cart, setCart] = useState([])

  const addToCart = item => setCart([...cart, item])
  const removeFromCart = item => setCart(cart.filter(cartItem => cartItem === item.config.id))

  return (
    <div>
      <CartContext.Provider value={[cart, addToCart, removeFromCart]}>
        {children}
      </CartContext.Provider>
    </div>
  )
}

export const withCart = Cmpt => props => (
  <CartContext.Consumer>
    {([cart, addToCart, removeFromCart]) => <Cmpt cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} {...props} />}
  </CartContext.Consumer>
)
