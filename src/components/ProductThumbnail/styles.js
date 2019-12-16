import styled from 'styled-components'

import { Panel } from 'components/common'
import * as gs from 'utils/globalStyles'

export const ProductWrapper = styled(Panel)`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.3);
  border: 1px solid ${gs.colours.offWhite};
  margin: ${gs.spacing.large} ${gs.spacing.normal} 0 ${gs.spacing.normal};
  padding: ${gs.spacing.normal}
  min-width: 200px;
  width: 20%;
  transition: all ${gs.transitions.fast};

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
  }
`

export const ProductImage = styled.img`
  border-radius: 50%;
  object-fit: cover;
  width: 200px;
  height: 200px;
  margin-bottom: ${gs.spacing.normal}
`

export const ProductTitle = styled.h3`
  font-size: ${gs.font.sizes.large};
  font-weight: ${gs.font.weights.heavy};
  font-family: ${gs.font.families.fancy};
  color: ${gs.colours.primary.default};
  text-align: center;
  margin-bottom: ${gs.spacing.normal};
  flex-grow: 1;
`

export const ProductDescription = styled.p`
`
