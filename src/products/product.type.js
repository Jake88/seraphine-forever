import COLOURS from 'utils/productColours'


export const PRODUCT_TYPE = {
  // id: PropTypes.string.isRequired,
  // shopifyConfig: PropTypes.object.isRequired,
  // Svg: PropTypes.any.isRequired,
  // colourConfig: PropTypes.shapeOf({
  //   availableColours: PropTypes.array.isRequired,
  //   defaultColours: PropTypes.array.isRequired
  // }).isRequired,
  // editableConfig: PropTypes.arrayOf(PropTypes.shapeOf({
  //   key: PropTypes.string.isRequired,
  //   type: PropTypes.any.isRequired // TODO: Confirm types - input, text field, number, date, etc?
  // })).isRequired
}

export const EDITABLE_TYPES = {
  TEXT: 'TEXT',
  NUMBER: 'NUMBER',
  DATE: 'DATE',
  TEXTAREA: 'TEXTAREA'
}

export const getAvailableColours = arrayOfValidTypes => {
  const filteredTypes = COLOURS.filter(colour => {
    let validFlag = true
    colour.types.forEach(type => {
      if (!arrayOfValidTypes.includes(type)) validFlag = false
    })
    return validFlag
  })
  return filteredTypes
}

export const getColour = colourName => COLOURS.find(color => colourName === color.name)
