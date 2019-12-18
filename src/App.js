import React from 'react';
import { Router, Location } from "@reach/router"
import styled from 'styled-components'
import { spacing } from 'utils/globalStyles'

//pages
import CartPage from 'pages/cart'
import ContactPage from 'pages/contact'
import CustomDesignsPage from 'pages/customDesigns'
import HomePage from 'pages/home'
import ProductsPage from 'pages/products'
import BlogPage from 'pages/blog'

import ProductPage from 'pages/order/orderWrapper'

import StickyHeader from 'components/StickyHeader'
import HeroBanner from 'components/HeroBanner'
import Footer from 'components/Footer'

import { ConfineWidth } from 'components/common'
import { ProvideCart } from 'contexts/cart'
import { ProvideProducts } from 'contexts/products'
import { ProvideLoader } from 'contexts/loader'
import { PATHS } from 'utils/paths'

import {
  TrendSetter
} from './AppStyles'

const Wrapper = styled.div`
  min-height: calc(100vh - 260px);
  padding-bottom: ${spacing.large};
`

function App() {
  return (
    <>
      <Wrapper>
        <ProvideLoader>
          <ProvideProducts>
            <ProvideCart>
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
                <Router primary={false}>
                  <HomePage path={PATHS.HOME.relative} />
                  <CartPage path={PATHS.CART.relative} />
                  <ContactPage path={PATHS.CONTACT.relative} />
                  <ProductsPage path={PATHS.PRODUCTS.relative} />
                  <CustomDesignsPage path={PATHS.CUSTOM_DESIGNS.relative} />
                  <BlogPage path={PATHS.BLOG.relative} />
                  <ProductPage path={`${PATHS.PRODUCT.relative}/*`}/>
                </Router>
              </ConfineWidth>
            </ProvideCart>
          </ProvideProducts>
        </ProvideLoader>
      </Wrapper>

      <Footer />
      <link href="https://fonts.googleapis.com/css?family=Alegreya+Sans:400,700|Alegreya:400,700&display=swap" rel="stylesheet"/>
    </>
  )
}

export default App
