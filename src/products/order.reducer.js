

const CHANGE_COLOUR = 'CHANGE_COLOUR'

export const orderActions = {
  changeColour: (productColourKey, colour) => ({type: CHANGE_COLOUR, colour, productColourKey })
}

export default (state, action) => {
  switch(action.type) {
    case CHANGE_COLOUR:
      const newColours = {
      }
      newColours[action.productColourKey] = action.colour
      return {
        ...state,
        customOptions: {
          ...state.customOptions,
          colours: {
            ...state.customOptions.colours,
            [action.productColourKey]: action.colour
          }
        }
      }
    default:
      return state
  }
}
