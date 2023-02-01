import { TABS } from "../../constanse";
import { SET_ACTIVE_TAB, SET_PAGE } from "../actionTypes/settingsActionTypes";
import { ISettingsStore } from "../types";

const initialState: ISettingsStore = {
  activeTab: TABS.Description,
  page: 1,
  pageSize: 6,
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
    default:
      return state;
  }
};
