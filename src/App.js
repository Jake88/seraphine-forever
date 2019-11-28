import React, {useEffect, useState} from 'react';
import { Router, Location } from "@reach/router"

import Product1 from 'products/BirthPillow'
import StickyHeader from 'components/StickyHeader'
import HeroBanner from 'components/HeroBanner'
import { ConfineWidth } from 'components/common'
import { CartProvider } from 'contexts/cart'

import {
  TrendSetter
} from './AppStyles'

import Shopify from 'shopify-buy'

export const ShopifyContext = React.createContext({})

const shopifyClient = Shopify.buildClient({
  domain: `seraphine-forever.myshopify.com`,
  storefrontAccessToken: `563c2502ed08b7c8eb18d5c1872f8d8c`
})

function App() {
  const [shopifyProducts, setShopifyProducts] = useState([])

  useEffect(() => {
    shopifyClient.product.fetchAll().then(setShopifyProducts);
  }, [])

  return (
    <React.Fragment>
      <ShopifyContext.Provider value={shopifyProducts}>
        <CartProvider cart={shopifyProducts}>
          <TrendSetter />
          <Location>
            {({location}) => (
              <React.Fragment>
                <StickyHeader path={location.pathname}/>
                <HeroBanner path={location.pathname}/>
              </React.Fragment>
            )}
          </Location>
          <ConfineWidth>
            <Router>
              < Product1 path='/products'/>
            </Router>
          </ConfineWidth>
        </CartProvider>
      </ShopifyContext.Provider>

      <link href="https://fonts.googleapis.com/css?family=Alegreya+Sans:400,700|Alegreya:400,700&display=swap" rel="stylesheet"/>
    </React.Fragment>
  )
}

export default App;
