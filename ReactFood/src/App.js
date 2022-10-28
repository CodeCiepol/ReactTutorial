import React, { useContext, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import CartContext from "./store/cart-context";

function App() {
  const [cartApperance,setCartApperance]=useState(false);

  const cartSetHandler=()=>{
    setCartApperance(true);
  }
 const cartResetHandler=()=>{
    setCartApperance(false)
 }


  return (
    <CartProvider>
      {cartApperance && (<Cart cartResetHandler={cartResetHandler}/>)}
      <Header CartSetHandler={cartSetHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}
export default App;
