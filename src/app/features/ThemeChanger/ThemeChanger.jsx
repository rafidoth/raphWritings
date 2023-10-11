import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { assignTheme } from "./themeChangerSlice"; 

function ThemeChanger(props) {
  const Theme = useSelector((state) => state.themeChanger.theme);
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem("theme", Theme);
  }, [Theme]);

  useEffect(() => {
    const local = localStorage.getItem("theme");
    if (local.length === 0) {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        dispatch(assignTheme({ theme: "dark" }));
        localStorage.setItem("theme", "dark");
      } else if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: light)").matches
      ) {
        dispatch(assignTheme({ theme: "light" }));
        localStorage.setItem("theme", "light");
      }
    }
  }, []);
  return <div className={Theme}>{props.children}</div>;
}

export default ThemeChanger;
