import React, { useState,useCallback } from "react";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowButton, setAllowButton] = useState(false);

  const showParagrahHandler = useCallback(() => {
    if (allowButton) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
   }
   } ,[allowButton])

   const allowButtonHandler =()=>{
    setAllowButton(true);
   }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}>Witaj</DemoOutput>
      <Button onClick={showParagrahHandler}>Show Paragraph!</Button>
      <Button onClick={allowButtonHandler}>Show Paragraph!</Button>
    </div>
  );
}

export default App;
