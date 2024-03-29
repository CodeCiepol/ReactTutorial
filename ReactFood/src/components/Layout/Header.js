import React from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton CartSetHandler={props.CartSetHandler} number={props.number}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="a table of delicous food" />
      </div>
    </React.Fragment>
  );
};
export default Header;
