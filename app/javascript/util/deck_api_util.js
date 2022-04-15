export const createDeck = (deck) => (
  $.ajax({
    url: `/api/decks`,
    type: `POST`,
    data: {deck}
  })
)