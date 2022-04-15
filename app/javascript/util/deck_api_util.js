export const createDeck = (deck) => (
  $.ajax({
    url: `/api/decks`,
    type: `POST`,
    data: deck
  })
)

export const getDecks = () => (
  $.ajax({
    url: `/api/decks`,
    type: `GET`
  })
)