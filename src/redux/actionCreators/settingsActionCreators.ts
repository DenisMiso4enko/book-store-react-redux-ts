import {
  SET_ACTIVE_TAB,
  SET_PAGE,
  SET_THEME,
} from "../actionTypes/settingsActionTypes";

export const setActiveTab = (activeTab: string) => ({
  type: SET_ACTIVE_TAB,
  activeTab,
});

export const setPage = (page: number) => ({
  type: SET_PAGE,
  page,
});
export const setTheme = (theme: string) => ({
  type: SET_THEME,
  theme,
});
