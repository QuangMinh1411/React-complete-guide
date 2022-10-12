import React, { useState, useRef } from "react";
import { Card } from "../UI/Card";
import { Button } from "../UI/Button";
import { ErrorModal } from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
export default function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter valid input",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Age under 1",
        message: "Please age over 1",
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    ageInputRef.current.value = "";
    nameInputRef.current.value = "";
  };
  const setErrorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={setErrorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age</label>
          <input id="age" type="number" age={ageInputRef} ref={ageInputRef} />
          <Button type="submit">AddUser</Button>
        </form>
      </Card>
    </>
  );
}
