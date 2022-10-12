import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
export default function NewExpense(props) {
  const saveExpenseDataHandler = (expenseDataInput) => {
    const expenseData = {
      ...expenseDataInput,
      id: Math.random().toString(),
    };
    props.addExpense(expenseData);
    setEdit(false);
  };
  const [isEdit, setEdit] = useState(false);
  const editHandler = () => {
    setEdit(true);
  };
  const stopEditHandler = () => {
    setEdit(false);
  };

  return (
    <div className="new-expense">
      {!isEdit && <button onClick={editHandler}>Add New Expense</button>}
      {isEdit && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditHandler}
        />
      )}
    </div>
  );
}
