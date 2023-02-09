import {
  SET_BOOKS,
  LOAD_BOOKS,
  LOAD_ONE_BOOK,
  SET_ONE_BOOK,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  SEARCH_BOOKS,
  SET_SEARCH_VALUE,
} from "../actionTypes/booksActionTypes";
import { takeEvery, put } from "redux-saga/effects";
import { IBooks, IBookStore } from "../../types/types";

export function* watcherBooks() {
  yield takeEvery(LOAD_BOOKS, fetchGetBooks);
  yield takeEvery(LOAD_ONE_BOOK, fetchGetOneBook);
  yield takeEvery(SEARCH_BOOKS, fetchSearchBooks);
}

export const setBooks = (books: IBookStore) => ({
  type: SET_BOOKS,
  books,
});
export const setOneBook = (book: IBooks) => ({
  type: SET_ONE_BOOK,
  book,
});
export const loadBooks = (setIsLoading: any) => ({
  type: LOAD_BOOKS,
  setIsLoading,
});
export const searchBooks = (searchValue: string, setIsLoading: any) => ({
  type: SEARCH_BOOKS,
  searchValue,
  setIsLoading,
});

export const loadOneBook = (id: string | undefined, setIsLoading: any) => ({
  type: LOAD_ONE_BOOK,
  id,
  setIsLoading,
});

export const addToFavorite = (id: string) => ({
  type: ADD_FAVORITE,
  id,
});
export const removeFromFavorite = (id: string) => ({
  type: REMOVE_FAVORITE,
  id,
});

export const setSearchValue = (value: string) => ({
  type: SET_SEARCH_VALUE,
  value,
});

export function* fetchGetOneBook(action: any) {
  const { id, setIsLoading } = action;
  setIsLoading(false);
  const response: Response = yield fetch(
    `https://api.itbook.store/1.0/books/${id}`
  );
  if (response.ok) {
    setIsLoading(true);
  }
  const data: IBooks = yield response.json();
  yield put(setOneBook(data));
}

export function* fetchGetBooks(action: any) {
  const { setIsLoading } = action;
  const response: Response = yield fetch("https://api.itbook.store/1.0/new");
  if (response.ok) {
    setIsLoading(true);
  }
  const data: { books: IBookStore } = yield response.json();
  const { books } = data;
  yield put(setBooks(books));
}
export function* fetchSearchBooks(action: any) {
  const { setIsLoading, searchValue } = action;
  const response: Response = yield fetch(
    `https://api.itbook.store/1.0/search/${searchValue}`
  );
  if (response.ok) {
    setIsLoading(true);
  }
  const data: { books: IBookStore } = yield response.json();
  const { books } = data;
  yield put(setBooks(books));
}
