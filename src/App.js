import React from 'react';
import { Router, Location } from "@reach/router"

import Product1 from 'products/BirthPillow'
import StickyHeader from 'components/StickyHeader'
import HeroBanner from 'components/HeroBanner'
import { ConfineWidth } from 'components/common'
import { ProvideCart } from 'contexts/cart'
import { ProvideProducts } from 'contexts/products'

import {
  TrendSetter
} from './AppStyles'

function App() {
  return (
    <React.Fragment>
      {/* <ProvideProducts> */}
        {/* <ProvideCart> */}
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
            {/* <Router>
              < Product1 path='/products'/>
            </Router> */}
          </ConfineWidth>
        {/* </ProvideCart> */}
      {/* </ProvideProducts> */}

      <link href="https://fonts.googleapis.com/css?family=Alegreya+Sans:400,700|Alegreya:400,700&display=swap" rel="stylesheet"/>
    </React.Fragment>
  )
}

export default App;
