export const reducerSidebar = (state = false, action: any) => {
  switch (action.type) {
    case "OPEN_SIDEBAR":
      return true;

    case "CLOSE_SIDEBAR":
      return false;

    default:
      return state;
  }
};
