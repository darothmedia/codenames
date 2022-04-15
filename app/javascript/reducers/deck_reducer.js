const { RECEIVE_DECK, RECEIVE_ERRORS } = require("../actions/deck_actions");

const DeckReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_DECK:
      return Object.assign({}, state, {[action.deck.id]: action.deck})
    default:
      return state;
  }
}

export default DeckReducer