

const CHANGE_COLOUR = 'ORDER/CHANGE_COLOUR'
const OVERWRITE_STATE = 'ORDER/OVERWRITE_STATE'
const UPDATE_DETAILS = 'ORDER/UPDATE_DETAILS'

export const orderActions = {
  changeColour: (productColourKey, colour) => ({type: CHANGE_COLOUR, colour, productColourKey }),
  overwriteState: newState => ({type: OVERWRITE_STATE, newState }),
  updateDetails: (detailKey, detail) => ({type: UPDATE_DETAILS, detail, detailKey }),
}

export default (state, action) => {
  switch(action.type) {
    case OVERWRITE_STATE:
      return action.newState
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
    case UPDATE_DETAILS:
      return {
        ...state,
        customOptions: {
          ...state.customOptions,
          details: {
            ...state.customOptions.details,
            [action.detailKey]: action.detail
          }
        }
      }
    default:
      return state
  }
}
