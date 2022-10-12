import React, { useState } from "react";
import "./ExpenseForm.css";
export default function ExpenseForm(props) {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const InputChangeHandler = (e) => {
    const key = e.target.name;
    userInput[key] = e.target.value;
    setUserInput((prevState) => {
      return {
        ...prevState,
        userInput,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onSaveExpenseData(userInput);
    setUserInput({
      title: "",
      amount: "",
      date: "",
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={userInput.title}
            onChange={InputChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            name="amount"
            value={userInput.amount}
            onChange={InputChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            name="date"
            value={userInput.date}
            onChange={InputChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
