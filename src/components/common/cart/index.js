import React, { useEffect, useState } from 'react'
import sc from 'styled-components'
import { ShoppingBasket as ShoppingCart } from 'styled-icons/fa-solid/ShoppingBasket'
import { Link as ReachLink } from '@reach/router'

import * as gs from 'utils/globalStyles'
import PATHS, { getNavConfig } from 'utils/paths'
import { consumeCart } from 'contexts/cart'

const StyledCartIcon = sc(ShoppingCart).attrs(() => ({
  size: '32px'
}))`
  color: ${({selected}) => selected ? gs.colours.secondary.lightest + ' !important' : gs.colours.tertiary.lightest};
`

const Text = sc.span`
  position: absolute;
  opacity: 0

  top: 20px;
  left: 0;
  font-weight: ${gs.font.weights.normal};
  font-size: ${gs.font.sizes.large};
  text-decoration: none;
  color: ${({selected}) => selected ? gs.colours.secondary.lightest + ' !important' : gs.colours.tertiary.lightest};
  transition: all ${gs.transitions.fast};

  ${({selected}) => selected && `
    opacity: 1;
    left: -30px;
  `}
`

const Link = sc(ReachLink)`
  position: absolute;
  background-color: transparent;
  border: none;
  padding: 12px;
  top: 0;
  right: 0;
  cursor: pointer;
  text-decoration: none;

  &:hover ${StyledCartIcon} {
    color: ${gs.colours.tertiary.lighter};
  }

  &:hover ${Text} {
    opacity: 1;
    left: -30px;
  }
`

const Alert = sc.span`
  display: block;
  position: absolute;
  top: 4px;
  right: 0;
  border-radius: 50%;
  border: 1px solid ${gs.colours.secondary.default};
  background-color: ${gs.colours.secondary.darker};
  width: 19px;
  height: 19px;
  font-size: 10px;
  line-height: 16px;
  color: ${gs.colours.white};
  text-align: auto;
`

const CartIcon = ({cart, path}) => {
  const [selected, setSelected] = useState(false)

  useEffect(() => {
    const navConfig = getNavConfig(path)
    for (let i = 0; i < navConfig.length; i++) {
      if (navConfig[i].to === PATHS.CART) {
        setSelected(navConfig[i].selected)
        break
      }
    }
  }, [path])

  return (
    <Link to={PATHS.CART}>
      <Text selected={selected}>Cart</Text>
      {cart.length ? <Alert>{cart.length}</Alert> : null}
      <StyledCartIcon selected={selected}/>
    </Link>
  )
}

export default consumeCart(CartIcon)
