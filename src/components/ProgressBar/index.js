import React from 'react'
import sc from 'styled-components'

import * as gs from 'utils/globalStyles'

const ProgressBar = sc.div`
  position: relative;
  width: 100%;
`

const Wrapper = sc.div`
  display: inline-block;
  width: ${({width}) => width}%;
  text-align: center;
  padding: 16px 0;
`

const Line = sc.div`
  position: relative;
  height: 50px;

  &::before {
    content: "";
    display: ${({first}) => first ? 'none' : 'block'};
    position: absolute;
    height: 4px;
    width: 100%;
    background-color: ${gs.colours.primary.lightest};
    left: -50%;
    top: 18px;
  }
`
const Dot = sc.div`
  top: ${({active}) => active ? 0 : 5}px;
  width: ${({active}) => active ? 40 : 30}px;
  height: ${({active}) => active ? 40 : 30}px;
  border: 4px solid ${gs.colours.primary.lightest};
  border-radius: 50%;
  background-color: ${({complete, active}) => complete || active ? gs.colours.primary.default : gs.colours.primary.tinted};
  margin: auto;
  position: absolute;
  left: calc(50% - ${({active}) => active ? 20 : 15}px);
  z-index: 1 ;
`

const Step = ({width, first, active, complete, label}) => (
  <Wrapper width={width} >
    <Line first={first}>
      <Dot active={active} complete={complete} />
    </Line>

    {label}
  </Wrapper>
)

// TODO: Make this resposive by reducing the dot size and removing the text of the non-active steps?

export default ({steps}) => (
  <ProgressBar>
    {steps.map((step, index) => (
      <Step {...step} first={index === 0} key={`step-${index}`} width={100/steps.length} />
    ))}
  </ProgressBar>
)
