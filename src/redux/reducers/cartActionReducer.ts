import { ICartStore } from "../types";
import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREMENT,
  DELETE_ITEM,
  INCREMENT,
} from "../actionTypes/cartActionTypes";

const initialState: ICartStore = {
  items: [],
};

export const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { item } = action;
      const id = item.isbn13;
      const findItem = state.items.find((item) => item.isbn13 === id);
      if (findItem) {
        findItem.count++;
      } else {
        return {
          ...state,
          items: [...state.items, item],
        };
      }
    }
    case DELETE_ITEM: {
      const { id } = action;
      return {
        ...state,
        items: state.items.filter((el: any) => el.isbn13 !== id),
      };
    }
    case CLEAR_CART: {
      return {
        ...state,
        items: [],
      };
    }
    case DECREMENT: {
      const { id } = action;
      const itemCount = state.items.find((item) => item.isbn13 === id);
      if (itemCount) {
        itemCount.count++;
      }
      return {
        ...state,
        items: [...state.items],
      };
    }
    case INCREMENT: {
      const { id } = action;
      const itemCount = state.items.find((item) => item.isbn13 === id);
      // @ts-ignore
      itemCount.count--;
      return {
        ...state,
        items: [...state.items],
      };
    }
    default: {
      return state;
    }
  }
};
