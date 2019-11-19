import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import * as gs from 'utils/globalStyles'


export const TrendSetter = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html {
    height: 100%
  }

  body {
    height: 100%;
    background-color: ${gs.colours.offWhite};
    background-image: linear-gradient(to bottom right, ${gs.colours.tertiary.lightest}, ${gs.colours.secondary.lightest});
    background-attachment: fixed;
    background-size: 100%;
    font-size: ${gs.font.sizes.normal};
    font-family: ${gs.font.families.normal};
    padding-top: ${gs.specifics.navHeight};
  }

  h1, h2, h3, h4, h5 {
    font-family: ${gs.font.families.fancy};
  }

  button {
    outline: none;
  }
`

