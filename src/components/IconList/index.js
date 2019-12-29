import React from 'react'
import { colours } from 'utils/globalStyles'

import { Paint } from 'styled-icons/boxicons-solid/Paint'
import { EditAlt } from 'styled-icons/boxicons-regular/EditAlt'
import { Carousel } from 'styled-icons/boxicons-solid/Carousel'
import { MagicWand } from 'styled-icons/boxicons-solid/MagicWand'

import {
  List,
  ListItem,
  IconWrapper
} from './styles'

const listConfig = [
  {
    Icon: Carousel,
    message: 'Pick a product'
  },
  {
    Icon: Paint,
    message: 'Choose your colours'
  },
  {
    Icon: EditAlt,
    message: 'Customise the content'
  },
  {
    Icon: MagicWand,
    message: 'Let the magic happen'
  }
]

const IconStep = ({Icon, message}) => {
  return (
    <ListItem>
      <IconWrapper><Icon color={colours.tertiary.darkest}/></IconWrapper> {message}
    </ListItem>
  )
}

const IconList = () => {
  return (
    <List>
      {listConfig.map(item => <IconStep {...item} key={item.message} />)}
    </List>
  )
}

export default IconList
