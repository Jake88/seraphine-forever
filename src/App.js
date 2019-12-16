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
import ProductDetailsPage from 'pages/order/productDetails'
import SvgEditorPage from 'pages/order/svgEditor'
import PersonaliserPage from 'pages/order/personaliser'
import ConfirmPage from 'pages/order/confirm'
import ThanksPage from 'pages/order/thanks'

import StickyHeader from 'components/StickyHeader'
import HeroBanner from 'components/HeroBanner'
import Footer from 'components/Footer'

import { ConfineWidth } from 'components/common'
import { ProvideCart } from 'contexts/cart'
import { ProvideProducts } from 'contexts/products'
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
                <ProductPage path={PATHS.PRODUCT.relative}>
                  <CustomDesignsPage path={PATHS.CUSTOM_DESIGNS.relative} />
                  <ProductDetailsPage path={PATHS.PRODUCT_DETAILS.relative} />
                  <SvgEditorPage path={PATHS.COLOUR_PICKER.relative} />
                  <PersonaliserPage path={PATHS.PERSONALISE.relative} />
                  <ConfirmPage path={PATHS.CONFIRM.relative} />
                  <ThanksPage path={PATHS.THANKS.relative} />
                  <BlogPage path={PATHS.BLOG.relative} />
                </ProductPage>
              </Router>
            </ConfineWidth>
          </ProvideCart>
        </ProvideProducts>
      </Wrapper>

      <Footer />
      <link href="https://fonts.googleapis.com/css?family=Alegreya+Sans:400,700|Alegreya:400,700&display=swap" rel="stylesheet"/>
    </>
  )
}

export default App
