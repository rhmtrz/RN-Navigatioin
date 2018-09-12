import { createAction } from 'redux-action';


export const INITIALIZE = 'INITIALIZE';
export const initializeApp = createAction(INITIALIZE);

const INITIAL_STATE = {
  text: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INITIALIZE: {
      return {
        ...state,
        text: 'helloooo.....'
      }
    }

    default: {
      return state
    }
  }
}
