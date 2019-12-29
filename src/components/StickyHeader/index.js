import React from 'react'
import sc from 'styled-components'

import logo from 'assets/logo.png'
import * as gs from 'utils/globalStyles'
import { ConfineWidth, Link } from 'components/common'
import { getNavConfig } from 'utils/paths'

const Bar = sc.div`
  box-shadow: ${gs.colours.fadedBlack} 0 0 6px;
  background-image: linear-gradient(to bottom right, ${gs.colours.tertiary.lightest}, ${gs.colours.secondary.lightest});
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0.9;
  padding: 0 ${gs.spacing.large};
  z-index: ${gs.layers.overlay};
`

const Wrapper = sc(ConfineWidth)`
  height: ${gs.specifics.navHeight};
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Nav = sc.nav`
  text-align: right;
  flex-grow: 1;

  a {
    display: inline-block;
    line-height: ${gs.specifics.navHeight};
    padding: 0 ${gs.spacing.small};
    text-decoration: underline;

    &:last-child {
      padding-right: 0;
    }
  }
`

const Title = sc.h2`
  ${Link} {
    font-size: ${gs.font.sizes.large};
    color: ${gs.colours.primary.darker};
    text-decoration: none;
  }
`

const Logo = sc.img`
  height: 40px;
  margin-right: ${gs.spacing.normal};
`

export default ({path}) => (
  <Bar>
    <Wrapper>
      <Logo src={logo} alt='Seraphine Forever logo'/>
      <Title><Link to='/'>Seraphine Forever</Link></Title>

      <Nav>
        {getNavConfig(path).map(config => !config.hidden && (
          <Link {...config} key={config.name}>{config.name}</Link>
        ))}
      </Nav>
    </Wrapper>
  </Bar>
)
