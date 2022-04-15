const { RECEIVE_ERRORS, CLEAR_ERRORS } = require("../actions/deck_actions")

const ErrorsReducer = (state={}, action) => {
  Object.freeze(state)
  switch(action.type){
    case RECEIVE_ERRORS:
      return Object.assign({}, state, {[action.error.status]: action.error.responseText})
    case CLEAR_ERRORS:
      return {}
    default:
      return state;
  };
};

export default ErrorsReducer