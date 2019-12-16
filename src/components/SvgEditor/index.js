import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { orderActions } from 'products/order.reducer'

import {
  SelectWrapper,
  SelectLabel,
  Select,
  SvgWrapper
} from './styles'

const SvgEditor = ({Svg, colours, orderReducerInterface = []}) => {
  const [orderState, dispatchToOrder] = orderReducerInterface

  const colourStates = []
  const SvgProps = {}
  colourStates.push(useState(colours.defaultColours[0]))
  colourStates.push(useState(colours.defaultColours[1]))
  colourStates.forEach(([state], index) => SvgProps[`color${index}`] = state.hex)

  const findColour = c => colours.availableColours.find(colour => colour.hex === c)

  const setColor = colourKey => e => {
    e.preventDefault()
    dispatchToOrder(orderActions.changeColour(colourKey, findColour(e.target.value)))
  }

  return (
    <React.Fragment>
      {orderState.customOptions.colours.keys.map((key, index) => (
          <SelectWrapper key={index}>
            <SelectLabel htmlFor={`colour${index}`}>Colour {index +1}:</SelectLabel>
            <Select id={`colour${index}`} value={orderState.customOptions.colours[key].hex} onChange={setColor(key)}>
              {colours.availableColours.map(colourOption => (
                <option value={colourOption.hex} key={colourOption.hex}>{colourOption.name}</option>
              ))}
            </Select>
          </SelectWrapper>
        )
      )}
      <SvgWrapper>
        <Svg {...SvgProps} />
      </SvgWrapper>
    </React.Fragment>
  )
}

SvgEditor.propTypes = {
  Svg: PropTypes.any.isRequired,
  colours: PropTypes.any.isRequired,
  orderReducerInterface: PropTypes.any.isRequired
}

export default SvgEditor
