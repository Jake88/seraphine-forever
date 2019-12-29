import React from 'react'
import styled from 'styled-components'
import * as gs from 'utils/globalStyles'

const Price = styled.p`
  text-align: right;
  font-weight: ${gs.font.weights.normal};
  margin-top: ${gs.spacing.large};
  font-size: ${gs.font.sizes.large};
`

const AdjustmentCost = styled.p`
  text-align: right;
  font-weight: ${gs.font.weights.normal};
  margin-top: ${gs.spacing.large};
  color: ${gs.colours.darkGrey};

  & + &, & + ${Price} {
    margin-top: ${gs.spacing.small};
  }
`

export default ({price, ammendments = []}) => {
  let totalPrice = parseFloat(price)
  ammendments.forEach(amm => totalPrice += amm)

  return (
  <>
    {ammendments.map((adj, index) => <AdjustmentCost key={`price_adjustment_${index}`}>+ {adj.toFixed(2)}</AdjustmentCost>)}
    <Price>Price: ${totalPrice.toFixed(2)}</Price>
  </>
)}
