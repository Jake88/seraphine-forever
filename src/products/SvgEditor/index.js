import React from 'react'
import sc from 'styled-components'

import * as gs from 'utils/globalStyles'

const SelectWrapper = sc.div`
  display: flex;
  flex-direction: row;
  margin-bottom: ${gs.spacing.normal};
`

const SelectLabel = sc.label`
  color: ${gs.colours.black};
  line-height: 40px;
  padding-right: ${gs.spacing.large};
  font-size: ${gs.font.sizes.normal};
`

const Select = sc.select`
  font-size: ${gs.font.sizes.normal};
  font-family: ${gs.font.families.normal};
  flex-grow: 1;
  height: 40px;
  background: ${gs.colours.offWhite};
  color: ${gs.colours.black};
  border: 1px solid ${gs.colours.fadedBlack};
`

const SvgWrapper = sc.div`
  & > svg {
    max-height: 400px;
  }
`

export default ({Svg, colours, colourStates}) => {
  const SvgProps = {}
  colourStates.forEach(([state], index) => SvgProps[`color${index}`] = state)

  const setColor = fn => e => {
    e.preventDefault()
    fn(e.target.value)
  }

  return (
    <React.Fragment>
      <SvgWrapper>
        <Svg {...SvgProps} />
      </SvgWrapper>
      {colourStates.map(([state, setter], index) => (
        <SelectWrapper>
          <SelectLabel htmlFor={`color${index}`}>Colour {index +1}:</SelectLabel>
          <Select id={`color${index}`} value={state} onChange={setColor(setter)}>
            {colours.map(colour => (
              <option value={colour.hex} key={colour.hex}>{colour.name}</option>
            ))}
          </Select>
        </SelectWrapper>
      ))}
    </React.Fragment>
  )
}
