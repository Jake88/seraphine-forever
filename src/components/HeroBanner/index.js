import React, {useState} from 'react'
import sc, {keyframes} from 'styled-components'
import {Link as ReachLink} from '@reach/router'

import * as gs from 'utils/globalStyles'
import PATHS, { getNavConfig } from 'utils/paths'
import { ConfineWidth } from 'components/Common'
import logoWithBackground from 'assets/logoWithBackground.jpg'
import heroBackground from 'assets/christmasbaubles.jpg'

const HeroBanner = sc.section`
  background-image:
    linear-gradient(to top, rgba(0,0,0,.9), rgba(0,0,0,.3)),
    url(${heroBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  pointer-events: none;
`

const Wrapper = sc(ConfineWidth)`
  position: relative;
  height: ${({home}) => home ? '400px' : '110px'};
  display: flex;
  flex-direction: column;
  text-align: center;
  transition: all ${gs.transitions.slow};
`

const InnerWrapper = sc.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
`

const Centerpiece = sc.img`
  border: 10px solid ${gs.colours.offWhite};
  box-shadow: ${gs.colours.fadedBlack} 0 3px 6px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: ${gs.spacing.large} auto ${gs.spacing.large} auto;
`
const Title = sc.h1`
  font-size: ${gs.font.sizes.title};
  font-weight: ${gs.font.weights.heavy};
  color: ${gs.colours.primary.lighter};
  margin-bottom: ${gs.spacing.normal};
`

const SubTitle = sc.p`
  font-size: ${gs.font.sizes.large};
  font-family: ${gs.font.families.fancy};
  color: ${gs.colours.primary.lightest};
`

const Link = sc(ReachLink)`
  font-size: ${gs.font.sizes.large};
  display: inline-block;
  padding: ${gs.spacing.normal} ${gs.spacing.large};
  text-decoration: none;
  color: ${({selected}) => selected ? gs.colours.secondary.lightest : gs.colours.tertiary.lightest};
  border-bottom: transparent solid 5px;
  border-color: ${({selected}) => selected ? gs.colours.secondary.lightest : 'transparent'};
  transition: all ${gs.transitions.fast};

  &:hover {
    color: ${({selected}) => selected ? gs.colours.secondary.lightest : gs.colours.tertiary.default};
  }
`

const Nav = sc.nav`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  pointer-events: auto;

  ${gs.media.down(gs.mediaSizes.sm)`
    display: none;
  `}
`

const Expander = sc.div`
  flex-grow: ${({home}) => home ? 0 : 1};
  transition: all ${gs.transitions.slow};
`

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Fader = sc.div`
  opacity: ${({home}) => home ? 1 : 0};
  transition: all ${gs.transitions.fast};
  animation: ${FadeIn} ${gs.transitions.normal};
`

export default ({path}) => {
  const [showExtras, setShowExtras] = useState(false)

  const home = path === PATHS.HOME

  if (home) {
    setTimeout(() => setShowExtras(true), 400)
  } else {
    setTimeout(() => setShowExtras(false), 400)
  }

  return (
    <HeroBanner>
      <Wrapper home={home}>
        <InnerWrapper>
          <Centerpiece home={showExtras} src={logoWithBackground}/>
          {showExtras && (
            <Fader home={home}>
              <Title>Seraphine Forever</Title>
              <SubTitle>I create unique keepsakes that are personalised to ensure special moments are never forgotten.</SubTitle>
            </Fader>
          )}
        </InnerWrapper>

        <Nav>
          {getNavConfig(path).map(config => (
            <Link {...config} key={config.name}>{config.name}</Link>
          ))}
          <Expander home={home}/>
        </Nav>

      </Wrapper>
    </HeroBanner>
  )
}
