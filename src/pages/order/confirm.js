import React from 'react'

import { PATHS } from 'utils/paths'
// import { orderActions } from 'reducers/order.reducer'
import ProgressBar from 'components/ProgressBar'
import {
  Panel,
  Title,
  Blurb,
  Paragraph,
  ButtonRow,
  LinkButton
} from 'components/common'

const steps = [
  {label: 'Pick a product', complete: true},
  {label: 'Style it', complete: true},
  {label: 'Personalise it', complete: true},
  {label: 'Order it', active: true}
]

export default ({product, orderReducerInterface}) => {
  console.log(orderReducerInterface[0])
  return (
    <>
      <ProgressBar steps={steps}/>
      <Panel>
        <Title>Summary</Title>
        <Blurb>Are you happy with the design and is all infomation correct?</Blurb>
        <Paragraph>Lorem ipsum.</Paragraph>
        <ButtonRow>
          <div>
            <LinkButton secondary="true" to={PATHS.COLOUR_PICKER.to(product.config.sfid)}>Change colours</LinkButton>
            <LinkButton secondary="true" to={PATHS.PERSONALISE.to(product.config.sfid)}>Change details</LinkButton>
          </div>
          <LinkButton secondary to={PATHS.CART.to}>Add to cart</LinkButton>
          <LinkButton to={PATHS.CONFIRM.to(product.config.sfid)}>Buy now</LinkButton>
        </ButtonRow>
      </Panel>
    </>
  )
}