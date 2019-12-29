import React from 'react'

import { PATHS } from 'utils/paths'
import { orderActions } from 'reducers/order.reducer'
import ProgressBar from 'components/ProgressBar'
import Price from 'components/Price'
import {
  InputWrapper,
  Label,
  Select
} from 'components/common/inputs'
import {
  Panel,
  HorizontalSplitter,
  Title,
  Blurb,
  Paragraph,
  ButtonRow,
  LinkButton
} from 'components/common'

const steps = [
  {label: 'Pick a product', complete: true},
  {label: 'Style it', active: true},
  {label: 'Personalise it'},
  {label: 'Order it'}
]

const createColourInterface = (colours, orderReducerInterface) => {
  const [orderState, dispatchToOrder] = orderReducerInterface
  const findColour = c => colours.availableColours.find(colour => colour.hex === c)
  const setColour = colourKey => e => {
    e.preventDefault()
    dispatchToOrder(orderActions.changeColour(colourKey, findColour(e.target.value)))
  }

  const colourKeys = Object.keys(orderState.customOptions.colours)
  const svgProps = {}
  Object.keys(orderState.customOptions.colours)
    .forEach(key => svgProps[key] = orderState.customOptions.colours[key].hex)

  return {
    orderState,
    setColour,
    colourKeys,
    svgProps
  }
}

const formatVinylCost = cost => cost && ` (+${cost.toFixed(2)})`

const SvgEditorPage = ({product, orderReducerInterface}) => {
  const {
    orderState,
    setColour,
    colourKeys,
    svgProps
  } = createColourInterface(product.config.colourConfig, orderReducerInterface)
  const priceAdjustments = Object.values(orderState.customOptions.colours).map(colour => colour.cost)
  return (
    <>
      <ProgressBar steps={steps}/>
      <Panel>
        <HorizontalSplitter>
          <div >
            <product.config.Svg style={{'maxHeight': '500px'}} {...svgProps}></product.config.Svg>
          </div>
          <div>
            <Title>Colour Picker</Title>
            <Blurb>Take your time and choose the colour(s) that best compliment your design.</Blurb>
            <Paragraph>Please note that some vinyl types cost more to produce, so there might be additional cost displayed at the bottom.</Paragraph>
            {colourKeys.map(key => (
              <InputWrapper key={`select_${key}`}>
                <Label htmlFor={`select_${key}`}>{key}:</Label>
                <div>
                  <Select id={`select_${key}`} value={orderState.customOptions.colours[key].hex} onChange={setColour(key)}>
                    {product.config.colourConfig.availableColours.map(colourOption => (
                      <option value={colourOption.hex} key={colourOption.hex}>
                        {colourOption.name}{formatVinylCost(orderState.customOptions.colours[key].cost)}
                      </option>
                    ))}
                  </Select>
                </div>
              </InputWrapper>
            ))}

            <Price price={product.price} ammendments={priceAdjustments}/>
            <ButtonRow>
              <div>
                <LinkButton secondary="true" to={PATHS.PRODUCT_DETAILS.to(product.config.sfid)}>View product details</LinkButton>
              </div>
              <LinkButton to={PATHS.PERSONALISE.to(product.config.sfid)}>Personalise details</LinkButton>
            </ButtonRow>
          </div>
        </HorizontalSplitter>
      </Panel>
    </>
  )
}

SvgEditorPage.propTypes = {
}

export default SvgEditorPage
