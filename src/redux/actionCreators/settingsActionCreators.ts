import { SET_ACTIVE_TAB, SET_PAGE } from "../actionTypes/settingsActionTypes";

export const setActiveTab = (activeTab: string) => ({
  type: SET_ACTIVE_TAB,
  activeTab,
});

export const setPage = (page: number) => ({
  type: SET_PAGE,
  page,
});
