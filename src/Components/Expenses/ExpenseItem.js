import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';
const ExpenseItem=(props)=>{
    // const expenseDate=new Date(2021,2,28);
    // const expenseTitle='Car Insurance';
    // const expenseAmount='430'
    // const LocationOfExpenditure='Amaravati'


    // const month=props.date.toLocaleString('en-US',{month:'long'});
    // const day=props.date.toLocaleString('en-US',{day:'2-digit'});
    // const year=props.date.getFullYear()
    const[title,setTitle] =useState(props.title)
    const changehandeler=()=>{
        setTitle('Updated!');
       
    }

    
    return(
        <Card className='expense-item '>
            {/* <div>{props.date.toISOString()}</div> */}
            {/* <div>
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            </div> */}
           <ExpenseDate date={props.date}></ExpenseDate>
           <div className='expense-item__description'>
            <h2>{title}</h2>
            {/* <h2>{LocationOfExpenditure}</h2> */}
            <div className='expense-item__price'>${props.amount}</div>
        </div>
           <button onClick={changehandeler}>Change title</button>
        </Card>
          
    )

}
export default ExpenseItem;