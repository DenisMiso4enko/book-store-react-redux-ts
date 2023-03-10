import { LOG_OUT, SET_USER, SIGN_UP } from "../actionTypes/userActionTypes";
import { IUser } from "../../types/types";

const initialState: IUser = {
  user: null,
};
export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USER: {
      const { user } = action;
      return {
        ...state,
        user,
      };
    }
    case LOG_OUT: {
      return {
        ...state,
        user: null,
      };
    }
    default: {
      return state;
    }
  }
};
