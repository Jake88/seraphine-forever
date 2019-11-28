import React from 'react'

const productsContext = React.createContext([])

export const provideProducts = ({products, children}) => (
  <productsContext.Provider value={products}>
    {...children}
  </productsContext.Provider>
)

export const consumeProducts = Cmpt => props => {
  <productsContext.Consumer>
    {products => <Cmpt products={products} {...props} />}// Does this work? {...props, products}}
  </productsContext.Consumer>
}
