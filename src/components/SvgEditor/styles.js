
import sc from 'styled-components'
import * as gs from 'utils/globalStyles'

export const SelectWrapper = sc.div`
  display: flex;
  flex-direction: row;
  margin-bottom: ${gs.spacing.normal};
`

export const SelectLabel = sc.label`
  color: ${gs.colours.black};
  line-height: 40px;
  padding-right: ${gs.spacing.large};
  font-size: ${gs.font.sizes.normal};
`

export const Select = sc.select`
  font-size: ${gs.font.sizes.normal};
  font-family: ${gs.font.families.normal};
  flex-grow: 1;
  height: 40px;
  background: ${gs.colours.offWhite};
  color: ${gs.colours.black};
  border: 1px solid ${gs.colours.fadedBlack};
`

export const SvgWrapper = sc.div`
  & > svg {
    max-height: 400px;
  }
`
