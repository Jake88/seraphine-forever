import { Link as ReachLink } from '@reach/router'
import sc from 'styled-components'
import * as gs from 'utils/globalStyles'
import { ChevronRight as SiChevronRight } from 'styled-icons/material/ChevronRight'

export const ChevronRight = sc(SiChevronRight).attrs({
  viewBox: '-8 0 24 24'
})``

export const ConfineWidth = sc.div`
  max-width: 1440px;
  margin: auto;
`

export const Link = sc(ReachLink)`
  color: ${({selected}) => selected ? gs.colours.secondary.darkest : gs.colours.tertiary.darkest};
  transition: all ${gs.transitions.fast};

  &:hover {
    color: ${({selected}) => selected ? gs.colours.secondary.darkest : gs.colours.tertiary.darker};
  }
`

export const LinkButton = sc(ReachLink)`
  display: inline-block;
  text-decoration: none;
  padding: ${gs.spacing.small} ${gs.spacing.normal};
  background-color: ${gs.colours.tertiary.darkest};
  color: ${gs.colours.tertiary.lighter};
  border-radius: ${gs.radius.small};
  border: 1px solid ${gs.colours.tertiary.darkest};
  transition: all ${gs.transitions.fast};

  &:hover {
    background-color: ${gs.colours.tertiary.darker};
    color: ${gs.colours.white};
  }
`

export const Panel = sc.section`
  background-color: ${gs.colours.offWhite};
  border-radius: ${gs.radius.large};
  padding: ${gs.spacing.large};
  margin: ${gs.spacing.large} 0;
  box-sizing: border-box;
  width: 100%;
`

export const Title = sc.h1`
  font-size: ${gs.font.sizes.title};
  font-weight: ${gs.font.weights.heavy};
  font-family: ${gs.font.families.fancy};
  color: ${gs.colours.primary.default};
  text-align: center;
  margin-bottom: ${gs.spacing.normal};
`

export const Paragraph = sc.p`
  font-size: ${gs.font.sizes.normal};
  color: ${gs.colours.black};
  margin-bottom: ${gs.spacing.large};
`

export const HorizontalSplitter = sc.div`
  display: flex;
  flex-wrap

  & > * {
    width: 50%

  ${gs.media.down(gs.mediaSizes.sm)`
    width: 100%;
  `}
  }
`
