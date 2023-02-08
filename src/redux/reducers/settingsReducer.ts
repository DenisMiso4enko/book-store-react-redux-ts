import { TABS } from "../../constanse";
import {
  SET_ACTIVE_TAB,
  SET_PAGE,
  SET_THEME,
} from "../actionTypes/settingsActionTypes";
import { ISettingsStore } from "../types";

const initialState: ISettingsStore = {
  activeTab: TABS.Description,
  page: 1,
  pageSize: 6,
  theme: "light",
};

export const settingsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_ACTIVE_TAB: {
      const { activeTab } = action;
      return {
        ...state,
        activeTab,
      };
    }
    case SET_PAGE: {
      const { page } = action;
      return {
        ...state,
        page,
      };
    }
    case SET_THEME: {
      const { theme } = action;
      return {
        ...state,
        theme,
      };
    }
    default:
      return state;
  }
};
