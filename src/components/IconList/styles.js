import styled from 'styled-components'
import * as gs from 'utils/globalStyles'

export const List = styled.ul`
  position: relative;
  list-styled: none;
  margin: 0;
  padding: 0;
  padding-left: 40px;
`

export const ListItem = styled.li`
  padding-bottom: ${gs.spacing.normal};
  margin: 0;
  border-left: 4px solid ${gs.colours.primary.default};
  display: flex;
  align-items: center;
  &:last-child {
    padding-bottom: 0;
  }
`

export const IconWrapper = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  margin-left: -42px;
  margin-right: ${gs.spacing.normal};
  border: 4px solid ${gs.colours.primary.default};
  background-color: ${gs.colours.offWhite}
  padding: ${gs.spacing.small};
`