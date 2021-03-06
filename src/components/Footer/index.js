import React from 'react'
import { Link } from '@reach/router'
import styled from 'styled-components'

import Logo from 'assets/SeraphineForeverWhiteLogo.png'
import { PATHS } from 'utils/paths'

import * as gs from 'utils/globalStyles'

const Footer = styled.section`
  padding: ${gs.spacing.large};
  background-color: ${gs.colours.primary.shaded};
  height: 200px;
  width: 100%;
  position: relative;
`

const StyledLogo = styled.div`
  position: absolute;
  top: ${gs.spacing.normal};
  opacity: 0.05;
  left: 0;
  height: 160px;
  width: 100%;
  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  pointer-events: none;
`

const Header = styled.h3`
  color: ${gs.colours.primary.darkest};
  margin-bottom: ${gs.spacing.small};
  font-family: ${gs.font.families.normal};
`

const SitemapItem = styled(Link)`
  display: inline-block;
  color: ${gs.colours.primary.darker};
  transition: all ${gs.transitions.fast};

  &:hover {
    color: ${gs.colours.primary.default};
  }
`

const Copyright = styled.p`
  position: absolute;
  bottom: ${gs.spacing.large};
  right: ${gs.spacing.large};
  color: ${gs.colours.primary.darker};
  text-align: right;
`

const Emphasis = styled.span`
  color: ${gs.colours.primary.default};
`

// TODO: Add a logo shilouette in the middle of the footer of colour darkest primary

export default () => (
  <Footer>
    <StyledLogo />
    <Header>Sitemap</Header>
    <SitemapItem to={PATHS.HOME.to}>Home</SitemapItem><br/>
    <SitemapItem to={PATHS.PRODUCTS.to}>Products</SitemapItem><br/>
    <SitemapItem to={PATHS.CUSTOM_DESIGNS.to}>Custom designs</SitemapItem><br/>
    <SitemapItem to={PATHS.BLOG.to}>Blog</SitemapItem><br/>
    <SitemapItem to={PATHS.CONTACT.to}>Contact us</SitemapItem><br/>
    <SitemapItem to={PATHS.CART.to}>Shopping cart</SitemapItem>

    <Copyright>
      Copyright© 2019 <Emphasis>Serphine Forever</Emphasis>, all rights reserved
      <br/>
      <br/>
      <Emphasis>ABN </Emphasis>000 00000 00000
      <br/>
      <br/>
      Website by <Emphasis>Jake Turner</Emphasis>
    </Copyright>
  </Footer>
)
