const INITILISE = 'FORM/INITILISE'
const TOUCH = 'FORM/TOUCH'
const BLUR = 'FORM/BLUR'
const SET_ERROR = 'FORM/SET_ERROR'
const CLEAR_ERROR = 'FORM/CLEAR_ERROR'

export const formActions = {
  initilise: formFieldIds => ({type: INITILISE, formFieldIds}),
  touch: formFieldId => ({type: TOUCH, formFieldId }),
  blur: formFieldId => ({type: BLUR, formFieldId }),
  setError: (formFieldId, error) => ({type: SET_ERROR, formFieldId, error }),
  clearError: (formFieldId, error) => ({type: CLEAR_ERROR, formFieldId, error })
}

export const formSelectors = {
  getField: (state, formFieldId) => state[formFieldId],
  getError: (state, formFieldId) => state[formFieldId] && state[formFieldId].blurred && state[formFieldId].error,
  isFormValid: state => {
    const keys = Object.keys(state)
    let flag = true
    keys.forEach(key => {
      if (!state[key].touched || state[key].error) {
        flag = false
      }
    })
    return flag
  }
}

export default (state, {type, formFieldIds, formFieldId, error}) => {
  switch(type) {
    case INITILISE:
      const newState = {}
      formFieldIds.forEach(id => newState[id] = {touched: false})
      return newState
    case TOUCH:
      return {
        ...state,
        [formFieldId]: {
          ...state[formFieldId],
          touched: true
        }
      }
    case BLUR:
      return {
        ...state,
        [formFieldId]: {
          ...state[formFieldId],
          blurred: true
        }
      }
    case SET_ERROR:
      return {
        ...state,
        [formFieldId]: {
          ...state[formFieldId],
          error
        }
      }
    case CLEAR_ERROR:
      return {
        ...state,
        [formFieldId]: {
          ...state[formFieldId],
          error: null
        }
      }
    default:
      return state
  }
}
