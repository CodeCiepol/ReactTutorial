import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModule from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

//curly braces is a dynamics function
const AddUser = (props) => {
  // we only using ref if want read smth,
  // eventually we can manipulate if we talking about input
  // its dangerous!!! not using anymore!! or if u want to change color or smth
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  //const [enteredUsername, setUsername] = useState("");
  const [enteredAge, setAge] = useState("");
  const [error, setError] = useState();

  const AddUserHandler = (event) => {
    event.preventDefault();
    console.log(nameInputRef);
    if (
      nameInputRef.current.value.trim().length === 0 ||
      enteredAge.trim().length === 0
    ) {
      setError({
        title: "invalid input",
        message: "you need to write smth in name and age",
      });
    }
    if (+enteredAge < 1) {
      setError({
        title: "invalid input",
        message: "Please enter a valid age (age>0)",
      });
    }
    const newUser = {
      id: Math.random().toString(),
      name: nameInputRef.current.value,
      year: enteredAge,
    };
    props.onAddNewUser(newUser);
    nameInputRef.current.value = "";
    setAge("");
  };

  //   const usernameChangeHandler = (event) => {
  //     setUsername(event.target.value);
  //   };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModule
          title={error.title}
          message={error.message}
          onResetError={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            //value={nameInputRef.current.value} you dont need value if using ref
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
