import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { booksReducer } from "./booksReducer";
import { settingsReducer } from "./settingsReducer";
import { cartReducer } from "./cartActionReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  books: booksReducer,
  settings: settingsReducer,
  cart: cartReducer,
});
