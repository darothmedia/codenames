import { combineReducers } from "redux"
import DeckReducer from "./deck_reducer"
import ErrorsReducer from "./errors_reducer"

const RootReducer = combineReducers({
  decks: DeckReducer,
  errors: ErrorsReducer
})

export default RootReducer