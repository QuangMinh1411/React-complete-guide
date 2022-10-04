import React, { useState } from "react";
import { Card } from "../UI/Card";
import { Button } from "../UI/Button";
import { ErrorModal } from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
export default function AddUser(props) {
  const [username, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();
  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };
  const ageHandler = (e) => {
    setAge(e.target.value);
  };
  const addUserHandler = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter valid input",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Age under 1",
        message: "Please age over 1",
      });
      return;
    }
    props.onAddUser(username, age);
    setUserName("");
    setAge("");
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
          <input
            id="username"
            type="text"
            value={username}
            onChange={userNameHandler}
          />
          <label htmlFor="age">Age</label>
          <input id="age" type="number" value={age} onChange={ageHandler} />
          <Button type="submit">AddUser</Button>
        </form>
      </Card>
    </>
  );
}
