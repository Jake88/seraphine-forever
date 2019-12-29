import React, { useState } from 'react'
import sc from 'styled-components'

import SvgEditor from 'components/SvgEditor'
import * as gs from 'utils/globalStyles'
import { Panel, Title, Paragraph } from 'components/common'
import ProgressBar from 'components/ProgressBar'


const Layout = sc(Panel)`
  display: flex;
  flex-wrap: wrap;
`

const TitleMobile = sc(Title)`
  display: none;
  ${gs.media.down(gs.mediaSizes.sm)`
    display: block;
  `}
`

const TitleDesktop = sc(Title)`
  display: block;
  ${gs.media.down(gs.mediaSizes.sm)`
    display: none;
  `}
`

const Container = sc.div`
  width: 50%;
  padding: ${gs.spacing.normal};

  &:last-child {
    padding-right: 0;
  }

  &:first-child {
    padding-left: 0;
  }

  ${gs.media.down(gs.mediaSizes.sm)`
    width: 100%;
    padding: ${gs.spacing.normal} 0;
  `}
`

const Price = sc.p`
  font-size: ${gs.font.sizes.large};
  text-align: right;
`
const Button = sc.button`
  padding: ${gs.spacing.normal};
  background-color: ${gs.colours.primary.lightest};
  border: 1px solid ${gs.colours.primary.lighter};
  margin: ${gs.spacing.normal} 0;
  border-radius: ${gs.radius.small};
  float: right;
  cursor: pointer;
  transition: all ${gs.transitions.fast};
  font-size: ${gs.font.sizes.normal};
  color: ${gs.colours.black};

  &:hover, &:focus {
    border-color: ${gs.colours.primary.default};
    box-shadow: ${gs.colours.fadedBlack} 0 2px 4px;
  }

  &:active {
    box-shadow: ${gs.colours.fadedBlack} 0 0 0;
    background-color: ${gs.colours.primary.lighter};
  }
`

export default ({productConfig, shopifyProduct, imageSources, Svg, colours, colourStates, children}) => {
  const SvgEditorProps = { Svg, colours, colourStates }

  const calculatePrice = () => {
    let vinylCost = 0
    colourStates.forEach(([hex]) => {
      colours.forEach(colour => {
        if (colour.hex === hex) {
          vinylCost += colour.cost
        }
      })
    })
    return productConfig.price + vinylCost
  }

  const steps = [
    {label: 'Pick a product', complete: true},
    {label: 'Style it', active: true},
    {label: 'Personalise it'},
    {label: 'Order it'}
  ]

  if (!shopifyProduct.variants) {
    return null
  } else {
    return (
      <Layout>
        <ProgressBar steps={steps}/>
        <Container>
          <TitleMobile>{shopifyProduct.title}</TitleMobile>
        </Container>
        <Container>
          <TitleDesktop>{shopifyProduct.title}</TitleDesktop>
          <Paragraph>{shopifyProduct.description}</Paragraph>
          <SvgEditor  {...SvgEditorProps}/>

          {children}

          <Price>Estimated cost: ${shopifyProduct.variants[0].price}</Price>
          <Button>Start a request</Button>
        </Container>
      </Layout>
    )
  }
}
