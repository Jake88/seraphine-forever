import Svg from './svg'
import { VINYL_TYPES, NAMES } from 'utils/productColours'
import {
  EDITABLE_TYPES,
  getAvailableColours,
  getColour
} from 'products/product.type'

export const BirthPillowConfig = {
  sfid: 'birth-pillow',
  id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzM5MzE1MjkyNDg4NTY=',
  shopifyConfig: {
    title: 'Baby Birth Pillow',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 40
  },
  Svg,
  colourConfig: {
    availableColours: getAvailableColours([VINYL_TYPES.GLITTER]),
    defaultColours: {
      colour1: getColour(NAMES.GLITTER_SILVER),
      colour2: getColour(NAMES.GLITTER_GOLD)
    }
  },
  editableConfig: [
    { key: 'name', type: EDITABLE_TYPES.INPUT },
    { key: 'date', type: EDITABLE_TYPES.DATE },
    { key: 'time', type: EDITABLE_TYPES.INPUT },
    { key: 'height', type: EDITABLE_TYPES.INPUT },
  ]
}
