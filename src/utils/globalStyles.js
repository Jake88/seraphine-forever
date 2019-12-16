import tinycolor from 'tinycolor2'
import mediaQueries from  'styled-media-helper'

export const mediaSizes = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
}

export const media = new mediaQueries({
  [mediaSizes.sm]: 768,
  [mediaSizes.md]: 992,
  [mediaSizes.lg]: 1200
})

const darken = (colour, percent = 20) => tinycolor.mix(colour, '#000', percent).toString()
const lighten = (colour, percent = 20) => tinycolor.mix(colour, '#fff', percent).toString()
const fade = (colour, fraction = 0.2) => tinycolor(colour).setAlpha(fraction).toString()
const createPalette = colour => ({
  darker: darken(colour),
  darkest: darken(colour, 50),
  lighter: lighten(colour),
  lightest: lighten(colour, 50),
  tinted: lighten(colour, 95),
  shaded: darken(colour, 90),
  faded: fade(colour)
})

export const font = {
  weights: {
    normal: '400',
    heavy: '600'
  },
  sizes: {
    small: '12px',
    normal: '16px',
    large: '20px',
    title: '28px'
  },
  families: {
    fancy: '"Alegreya", serif',
    normal: '"Alegreya Sans", sans-serif'
  }
}

export const lineHeights = {
  withoutBorder: '50px',
  withThinBorder: '48px',
  withThickBorder: '46px',
}

export const spacing = {
  nil: 0,
  small: '8px',
  normal: '16px',
  large: '32px'
}

const PRIMARY_COLOUR = '#7e74b5'
const SECONDARY_COLOUR = '#c073bb'
const TERTIARY_COLOUR = '#7ab3e1'

const ERROR_COLOUR = '#db0000'
const SUCCESS_COLOUR = '#31ad00'

export const colours = {
  primary: Object.assign({default: PRIMARY_COLOUR}, createPalette(PRIMARY_COLOUR)),
  secondary: Object.assign({default: SECONDARY_COLOUR}, createPalette(SECONDARY_COLOUR)),
  tertiary: Object.assign({default: TERTIARY_COLOUR}, createPalette(TERTIARY_COLOUR)),

  white: '#fff',
  offWhite: '#efefef',
  lightGrey: '#cecece',
  grey: '#999',
  darkGrey: '#666',
  black: '#222',
  fadedBlack: fade('#222', 0.6),

  error: Object.assign({default: ERROR_COLOUR}, createPalette(ERROR_COLOUR)),
  success: Object.assign({default: SUCCESS_COLOUR}, createPalette(SUCCESS_COLOUR)),

  brands: {
    facebook: {
      default: '#3B5998',
      highlight: lighten('#3B5998')
    },
    google: {
      default: '#dd4b39',
      highlight: lighten('#dd4b39')
    }
  }
}

export const radius = {
  small: '4px',
  large: '8px'
}

export const borders = {
  thin: '1px solid',
  thick: '2px solid'
}

export const transitions = {
  slow: '0.8s',
  normal: '0.4s',
  fast: '0.2s',
}

export const specifics = {
  navHeight: '60px'
}

export const breakpoints = {
  desktop: '1000px'
}

export const layers = {
  base: 0,
  important: 1,
  overlay: 2
}
