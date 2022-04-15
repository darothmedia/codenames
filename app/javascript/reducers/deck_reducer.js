const { RECEIVE_DECK, RECEIVE_ERRORS, RECEIVE_ALL_DECKS } = require("../actions/deck_actions");

const DeckReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_DECK:
      return Object.assign({}, state, {[action.deck.id]: action.deck})
    case RECEIVE_ALL_DECKS:
      return action.decks
    default:
      return state;
  }
}

export default DeckReducer