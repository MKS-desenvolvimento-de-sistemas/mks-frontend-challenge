import { CLOSE_SIDEBAR, OPEN_SIDEBAR } from "./actionTypes";

export const openSidebar = (payload: boolean) => ({
  type: OPEN_SIDEBAR,
  payload,
});

export const closeSidebar = (payload: boolean) => ({
  type: CLOSE_SIDEBAR,
  payload,
});
