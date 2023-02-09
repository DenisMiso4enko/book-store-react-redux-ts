import { IBookStore } from "../../types/types";
import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  SET_BOOKS,
  SET_ONE_BOOK,
  SET_SEARCH_VALUE,
} from "../actionTypes/booksActionTypes";

const initialState: IBookStore = {
  books: [],
  oneBook: [],
  favorites: [],
  countTotal: 0,
  searchValue: "",
  items: [],
  count: 0,
  totalPrice: 0,
};

export const booksReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_BOOKS: {
      const { books } = action;
      return {
        ...state,
        books,
      };
    }
    case SET_ONE_BOOK: {
      const { book } = action;
      return {
        ...state,
        oneBook: book,
      };
    }
    case ADD_FAVORITE: {
      const { id } = action;
      return {
        ...state,
        favorites: [...state.favorites, id],
      };
    }
    case REMOVE_FAVORITE: {
      const { id } = action;
      return {
        ...state,
        favorites: state.favorites.filter((el: any) => el !== id),
      };
    }
    case SET_SEARCH_VALUE: {
      const { value } = action;
      return {
        ...state,
        searchValue: value,
      };
    }
    default: {
      return state;
    }
  }
};
