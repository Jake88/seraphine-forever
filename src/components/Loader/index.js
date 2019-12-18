import React from 'react'
import styled, { keyframes } from 'styled-components'
import * as gs from 'utils/globalStyles'
import { withLoader } from 'contexts/loader'

import Spinner from './spinnerSvg'

const scaleAnimation = keyframes`
  0% { transform: scale(.5); }
  50% { transform: scale(1); }
  100% { transform: scale(.5); }
`

const translateAnimation = keyframes`
  0% { transform: translateY(-10px); }
  50% { transform: translateY(10px); }
  100% { transform: translateY(-10px); }
`

const Floater = styled.div`
  margin-top: ${gs.spacing.large};
  animation: ${translateAnimation} 2s ease-in-out 0s infinite;
`

const LoadingMessage = styled.h3`
  text-align: center;
  font-size: ${gs.font.sizes.large};
  color: ${gs.colours.primary.darkest};
  font-family: ${gs.font.families.normal};
  margin-top: ${gs.spacing.small};
`

const FloatingShadow= styled.div`
  display: block;
  height: 20px;
  width: 200px;
  margin: auto;
  border-radius: 50%;
  opacity: .2;
  background: radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%);
  animation: ${scaleAnimation} 2s ease-in-out 0s infinite;
`


const Loader = ({loadingMessages}) => {
  return (
    <div>
      <Floater>
        <Spinner />
      </Floater>
      <FloatingShadow />
      {loadingMessages.map(config => <LoadingMessage key={config.key}>{config.message}</LoadingMessage>)}
    </div>
  )
}

export default withLoader(Loader)
