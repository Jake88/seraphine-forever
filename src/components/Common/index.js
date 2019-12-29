import { Link as ReachLink } from '@reach/router'
import styled from 'styled-components'
import * as gs from 'utils/globalStyles'
import { ChevronRight as SiChevronRight } from 'styled-icons/material/ChevronRight'

export const ChevronRight = styled(SiChevronRight).attrs({
  viewBox: '-8 0 24 24'
})``

export const ConfineWidth = styled.div`
  max-width: 1440px;
  margin: auto;
`

export const Link = styled(ReachLink)`
  color: ${({selected}) => selected ? gs.colours.secondary.darkest : gs.colours.tertiary.darkest};
  transition: all ${gs.transitions.fast};

  &:hover {
    color: ${({selected}) => selected ? gs.colours.secondary.darkest : gs.colours.tertiary.darker};
  }
`

export const Button = styled.button`
  display: inline-block;
  text-decoration: none;
  padding: ${gs.spacing.small} ${gs.spacing.normal};
  padding: ${gs.spacing.normal} ${gs.spacing.large};
  background-color: ${gs.colours.tertiary.darkest};
  color: ${gs.colours.tertiary.lightest};
  border-radius: ${gs.radius.small};
  border: 1px solid ${gs.colours.tertiary.darkest};
  transition: all ${gs.transitions.fast};
  font-size: ${gs.font.sizes.normal};

  & + button, & + a {
    margin-left: ${gs.spacing.normal};
  }

  &:hover {
    background-color: ${gs.colours.tertiary.darker};
    color: ${gs.colours.white};
  }

  ${({secondary}) => secondary && `
    background-color: ${gs.colours.tertiary.tinted};
    color: ${gs.colours.tertiary.darkest};

    &:hover {
      background-color: ${gs.colours.tertiary.lightest};
      color: ${gs.colours.tertiary.shaded};
    }
  `}
`
export const LinkButton = styled(ReachLink)`
  display: inline-block;
  text-decoration: none;
  padding: ${gs.spacing.small} ${gs.spacing.normal};
  padding: ${gs.spacing.normal} ${gs.spacing.large};
  background-color: ${gs.colours.tertiary.darkest};
  color: ${gs.colours.tertiary.lightest};
  border-radius: ${gs.radius.small};
  border: 1px solid ${gs.colours.tertiary.darkest};
  transition: all ${gs.transitions.fast};
  font-size: ${gs.font.sizes.normal};

  & + button, & + a {
    margin-left: ${gs.spacing.normal};
  }

  &:hover {
    background-color: ${gs.colours.tertiary.darker};
    color: ${gs.colours.white};
  }

  ${({secondary}) => secondary && `
    background-color: ${gs.colours.tertiary.tinted};
    color: ${gs.colours.tertiary.darkest};

    &:hover {
      background-color: ${gs.colours.tertiary.lightest};
      color: ${gs.colours.tertiary.shaded};
    }
  `}


  ${({disabled}) => disabled && `
    opacity: 0.5;
    pointer-events: none;
    pointer: normal;
  `}
`

export const ButtonRow = styled.div`
  display: flex;
  margin-top: ${gs.spacing.large};
  
  & > *:first-child {
    flex-grow: 1;
  }
`

export const Panel = styled.section`
  background-color: ${gs.colours.offWhite};
  border-radius: ${gs.radius.large};
  padding: ${gs.spacing.large};
  margin: ${gs.spacing.large} 0;
  box-sizing: border-box;
  width: 100%;
`

export const Title = styled.h1`
  font-size: ${gs.font.sizes.title};
  font-weight: ${gs.font.weights.heavy};
  font-family: ${gs.font.families.fancy};
  color: ${gs.colours.primary.default};
  text-align: center;
  margin-bottom: ${gs.spacing.normal};
`

export const Blurb = styled.h3`
  font-size: ${gs.font.sizes.large};
  font-family: ${gs.font.families.normal};
  color: ${gs.colours.black};
  text-align: center;
  margin-bottom: ${gs.spacing.large};
`

export const Paragraph = styled.p`
  font-size: ${gs.font.sizes.normal};
  color: ${gs.colours.black};
  margin-bottom: ${gs.spacing.large};
`

export const HorizontalSplitter = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > *:last-child {
    padding-left: ${gs.spacing.normal};
  }
  & > *:first-child {
    padding-right: ${gs.spacing.normal};
  }

  & > * {
    width: 50%

  ${gs.media.down(gs.mediaSizes.sm)`
    width: 100%;
  `}
  }
`

export const ImageBanner = styled.div`
  position: relative;
  height: ${({height}) => height || '200px'};
  width: 100%;
  background-image: 
    linear-gradient(to right, ${gs.colours.primary.shaded}, rgba(0,0,0,0), ${gs.colours.primary.shaded}),
    url(${({img}) => img});
  background-repeat: space;
  background-size: auto;
  background-position: 75% center;
  border: ${gs.spacing.small} solid ${gs.colours.primary.shaded};
  margin: ${gs.spacing.large} 0;

  &::after, &::before {
    height: 100%;
    width: 100%;
    right: 100%;
    top: -${gs.spacing.small};
    position: absolute;
    border: ${gs.spacing.small} solid ${gs.colours.primary.shaded};
    background-color: ${gs.colours.primary.shaded};
    content: "";
  }

  &::before {
    left: 100%;
  }
`
