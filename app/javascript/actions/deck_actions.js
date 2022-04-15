import * as APIUtil from '../util/deck_api_util'

export const RECEIVE_DECK = 'RECEIVE_DECK'
export const RECEIVE_ALL_DECKS = 'RECEIVE_ALL_DECKS'

export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

const receiveDeck = deck => ({
  type: RECEIVE_DECK,
  deck
})

const receiveAllDecks = decks => ({
  type: RECEIVE_ALL_DECKS,
  decks
})

const receiveErrors = error => ({
  type: RECEIVE_ERRORS,
  error
})

export const clearErrors = () => ({
  type: CLEAR_ERRORS
})

export const createDeck = deck => dispatch => APIUtil.createDeck(deck)
  .then(deck => dispatch(receiveDeck(deck)),
    error => dispatch(receiveErrors(error))
  );

export const fetchDecks = () => dispatch => APIUtil.getDecks()
  .then(decks => dispatch(receiveAllDecks(decks)),
    error => dispatch(receiveErrors(error))
  );