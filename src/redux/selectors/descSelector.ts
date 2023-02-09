import { IStore } from "../../types/types";

export const selectDesc = (state: IStore, tab: any) => {
  if (!tab) return state.books.oneBook;
  if (tab === "Description") {
    return state.books.oneBook.desc;
  }
  if (tab === "Authors") {
    return state.books.oneBook.authors;
  }
  if (tab === "Reviews") {
    return state.books.oneBook.subtitle;
  }
};
