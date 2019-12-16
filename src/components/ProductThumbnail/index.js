import React from 'react'
import {navigate} from '@reach/router'

import { PATHS } from 'utils/paths'
import { Link } from 'components/common'

import {
  ProductTitle,
  ProductWrapper,
  ProductImage
} from './styles'

export default ({product}) => (
  <ProductWrapper onClick={() =>
    navigate( PATHS.PRODUCT_DETAILS.to, { state: {product: product} })
  }>
    <ProductTitle>{product.title}</ProductTitle>
    <ProductImage src={product.images[0].src}/>
    <Link
      to={PATHS.PRODUCT_DETAILS.to}
      state={{product: product}}
    >
      More details
    </Link>
  </ProductWrapper>
)
