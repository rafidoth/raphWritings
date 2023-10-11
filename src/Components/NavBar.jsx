import React from "react";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <>
      <div className="bg-amber-400 dark:bg-black">
        <li>
          <NavLink to="/raphy">Know Raphy</NavLink>
        </li>
        <li>
          <NavLink to="/main">read Raph</NavLink>
        </li>
      </div>
    </>
  );
}

export default NavBar;
