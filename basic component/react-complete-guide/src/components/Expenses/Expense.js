import React,{useState} from 'react'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter'
import './Expense.css'
export default function Expense(props) {
  const [year,setYear] = useState('2020')
  const filterChangeHandler = selectedYear=>{
    setYear(selectedYear)
  }
  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter selected={year} onChangeFilter={filterChangeHandler} />
        <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
    </div>
    
  )
}
