import React, { useContext } from "react";
import AuthContext from "../store/auth-context";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  //return (
  // <AuthContext.Consumer>
  //   {/* we had a consumer that takes a child wich is a ctx  */}
  //   {(ctx) => {

  const ctx = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};
//}

//</AuthContext.Consumer>
//);
//};

export default Navigation;
