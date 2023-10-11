import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "",
};

export const themeChangerSlice = createSlice({
  name: "Theme Changer",
  initialState,
  reducers: {
    changeTheme: (state) => {
      if (state.theme === "light") state.theme = "dark";
      else if (state.theme === "dark") state.theme = "light";
    },

    assignTheme: (state, action) => {
      state.theme = action.payload.theme;
    },
  },
});

export const { changeTheme, assignTheme } = themeChangerSlice.actions;

export default themeChangerSlice.reducer;
