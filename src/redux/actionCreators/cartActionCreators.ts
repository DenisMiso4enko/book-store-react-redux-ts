import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREMENT,
  DELETE_ITEM,
  INCREMENT,
} from "../actionTypes/cartActionTypes";
import { ICartItem } from "../../types/types";

export const addToCart = (item: ICartItem) => ({
  type: ADD_TO_CART,
  item,
});

export const deleteItemInCart = (id: string) => ({
  type: DELETE_ITEM,
  id,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
export const decrement = (id: string) => ({
  type: DECREMENT,
  id,
});
export const increment = (id: string) => ({
  type: INCREMENT,
  id,
});
