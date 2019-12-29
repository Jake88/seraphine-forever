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
  blurb: `Personalised pillows are a wonderful keepsake gift for a newborn, birthday, baptism or other occasion. Perfect to ensure lasting memories.`,
  finePrint: `Includes pillow case and pillow insert`,
  specs: [{
    key: `Pillow size`,
    value: `43cm x 43cm`
  }],
  Svg,
  colourConfig: {
    availableColours: getAvailableColours([VINYL_TYPES.GLITTER]),
    defaultColours: {
      'Primary': getColour(NAMES.GLITTER_SILVER),
      'Accent': getColour(NAMES.GLITTER_GOLD)
    }
  },
  editableConfig: [
    { 
      id: 'First name',
      type: EDITABLE_TYPES.TEXT,
      required: true,
      defaultValue: '',
      placeholder: 'John'
    },
    {
      id: 'Date of birth',
      type: EDITABLE_TYPES.DATE,
      required: true,
      defaultValue: '',
      placeholder: 'DD/MM/YYY'
    },
    {
      id: 'Time of birth',
      type: EDITABLE_TYPES.TEXT,
      required: true,
      defaultValue: '',
      placeholder: 'HH:MM (PM / AM)'
    },
    {
      id: 'Baby length',
      type: EDITABLE_TYPES.TEXT,
      required: true,
      defaultValue: '',
      placeholder: '52 (cm / inch)'
    },
    {
      id: 'Baby weight',
      type: EDITABLE_TYPES.TEXT,
      required: true,
      defaultValue: '',
      placeholder: '2.5 (kg / lbs)'
    }
  ]
}
