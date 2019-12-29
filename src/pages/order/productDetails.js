import React from 'react'

import {PATHS} from 'utils/paths'
import {
  Panel,
  HorizontalSplitter,
  Title,
  Blurb,
  Paragraph,
  ButtonRow,
  LinkButton
} from 'components/common'
import ImageViewer from 'components/ImageViewer'
import Price from 'components/Price'
import Table from 'components/common/Table'
import ProgressBar from 'components/ProgressBar'

const steps = [
  {label: 'Pick a product', active: true},
  {label: 'Style it'},
  {label: 'Personalise it'},
  {label: 'Order it'}
]

export default ({product}) => {
  return (
    <>
      <ProgressBar steps={steps}/>

      <Panel>
        <HorizontalSplitter>
          <ImageViewer images={product.images} />
          <div>
            <Title>{product.title}</Title>
            <Blurb>{product.config.blurb}</Blurb>
            <Paragraph>{product.config.finePrint}</Paragraph>
            <Table
              title="Details"
              keyValues={product.config.specs}
              />
            <Price price={product.price}/>
            <ButtonRow>
              <div>
                <LinkButton secondary="true" to={PATHS.PRODUCTS.to}>Back</LinkButton>
              </div>
              <LinkButton to={PATHS.COLOUR_PICKER.to(product.config.sfid)}>Pick colours</LinkButton>
            </ButtonRow>

          </div>
        </HorizontalSplitter>
      </Panel>
    </>
)}
