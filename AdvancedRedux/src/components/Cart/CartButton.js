import classes from './CartButton.module.css';
// import { cartActions } from "."

const CartButton = (props) => {
  const showCartHandler =()=>{

  }
  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
