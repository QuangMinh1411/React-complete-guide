import React from "react";
import "./ExpenseDate.css";
export default function ExpenseDate(props) {
  // const month = props.date.toLocaleString('en-US', { month: 'long' });
  // const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  // const year = props.date.getFullYear()
  const date = props.date.split("-");
  const day = date[2];
  const month = date[1];
  const year = date[0];

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
