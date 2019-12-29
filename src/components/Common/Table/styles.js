import styled from 'styled-components'
import * as gs from 'utils/globalStyles'

export const Table = styled.table`
  width: 100%;
  border: none;
`

export const Header = styled.th`
  text-align: left;
  font-size: ${gs.font.sizes.normal};
  padding: ${gs.spacing.small};
  border-bottom: 1px solid ${gs.colours.darkGrey};
  color: ${gs.colours.primary.default};
`

export const Row = styled.tr`
  transition: all ${gs.transitions.fast};
  border-bottom: 1px solid ${gs.colours.lightGrey};

  & td:last-child {
    text-align: right;
  }
`

export const Detail = styled.td`
  font-size: ${gs.font.sizes.normal};
  padding: ${gs.spacing.small};
`