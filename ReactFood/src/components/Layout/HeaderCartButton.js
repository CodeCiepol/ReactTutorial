import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHiglighted, setBtnIsHiglighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currNumb, item) => {
    return currNumb + item.amount;
  }, 0);

const {items} = cartCtx

  const btnClasses = `${classes.button} ${btnIsHiglighted ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHiglighted(true);

    const timer = setTimeout(() => {
      setBtnIsHiglighted(false);
    }, 300);
    // return () => {
    //   clearTimeout(timer);
    // };
  }, [items]);

  return (
    <>
      <button className={btnClasses} onClick={props.CartSetHandler}>
        <span className={classes.icon}>
          <CartIcon></CartIcon>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}> {numberOfCartItems} </span>
      </button>
    </>
  );
};
export default HeaderCartButton;
