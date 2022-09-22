import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
export default function NewExpense(props) {
  const saveExpenseDataHandler = (expenseDataInput)=>{
    const expenseData = {
      ...expenseDataInput,
      id: Math.random().toString()
    }
    props.addExpense(expenseData);
  }
  
  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData ={saveExpenseDataHandler} />
    </div>
  )
}
