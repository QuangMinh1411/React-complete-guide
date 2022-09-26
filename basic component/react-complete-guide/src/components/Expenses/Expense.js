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
        {
          props.items.map((expense)=>
            <ExpenseItem key={expense.id}
              title={expense.title} 
              amount={expense.amount}
              date={expense.date} />
          )
        }
        
    </Card>
    </div>
    
  )
}
