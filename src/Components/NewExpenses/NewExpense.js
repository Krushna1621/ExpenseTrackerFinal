import React from "react";
import ExpenseFrom from "./ExpenseForm";
import './NewExpense.css';
const NewExpense=(props)=>{
    
    const saveExpenseDatahandler=(enteredExpenseData)=>{
           const expenseData={
            ...enteredExpenseData,
            id:Math.random.toString()
           }
           props.onAddExpense(expenseData)
    }


     return(
        <div className="new-expense">
          <ExpenseFrom onSaveData={saveExpenseDatahandler}></ExpenseFrom>
        </div>
     )
}
export default NewExpense;