import { createSlice } from "@reduxjs/toolkit";

type Payload = "light" | "dark";
const getOpositeTheme = (currrentTheme: Payload): Payload => {
  if (currrentTheme === "light") {
    return "dark";
  }

  return "light";
};

const initialState: { currentValue: Payload } = {
  currentValue: "light",
};

const theme = createSlice({
  name: "currentValue",
  initialState: initialState,
  reducers: {
    change(state) {
      state.currentValue = getOpositeTheme(state.currentValue);
    },
  },
});

export const { change } = theme.actions;
export default theme.reducer;
