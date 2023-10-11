import React from "react";
import NavBar from "./Components/NavBar";
import { Outlet } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./app/store";
import ThemeChanger from "./app/features/ThemeChanger/ThemeChanger";

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeChanger>
          <NavBar />
          <Outlet />
        </ThemeChanger>
      </Provider>
    </>
  );
}

export default App;
