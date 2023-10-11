import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/Counter/counterSlice";
import themeChangerReducer from "./features/ThemeChanger/themeChangerSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    themeChanger: themeChangerReducer,
  },
});
