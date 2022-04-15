import * as APIUtil from '../util/deck_api_util'

export const RECEIVE_DECK = 'RECEIVE_DECK'

export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

const receiveDeck = deck => ({
  type: RECEIVE_DECK,
  deck
})

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
})

const clearErrors = () => ({
  type: CLEAR_ERRORS
})

export const createDeck = deck => dispatch => APIUtil.createDeck(deck)
  .then(deck => dispatch(receiveDeck(deck)),
    error => dispatch(receiveErrors(error.responseJSON))
  );