import { useState } from 'react';
import './ExpenseForm.css';
const ExpenseFrom=(props)=>{
     const[entertitle,setTitle]=useState('')
     const[enterAmount,setAmount]=useState('')
     const[enterDate,setDate]=useState('')

    // const[userInput,setInput]=useState({entertitle:'',
    //                   enteramount:'',
    //                   enterdate:''           })


      const titleChangehandler=(event)=>{
        setTitle(event.target.value)
        // setInput({...userInput,
        //             entertitle:event.target.value })
                    
        // setInput((prevState)=>{
        //         return(
        //             {
        //                 ...prevState,
        //               entertitle:event.target.value
        //             }
        //         )
        // }) 
    }
      const amountchangehandler=(event)=>{
           setAmount(event.target.value)
      }
      const datechangehandler=(event)=>{
           setDate(event.target.value)
      }
    //  const amountchangehandler=(event)=>{
    //     // setInput({...userInput,
    //     //     enteramount:event.target.value })
          
    //   }
    //   const datechangehandler=(event)=>{
    //     setInput({...userInput,
    //         enterdate:event.target.value })
    //         console.log(userInput)
    //   }
      const submithandler=(event)=>{
              event.preventDefault();
              const expenseData={
                    title:entertitle,
                    amount:enterAmount,
                    date:enterDate }
            props.onSaveData(expenseData)
            setTitle('')
            setAmount('')
            setDate('')
      }

      return(
      
            <form onSubmit={submithandler}>
                <div className="new-expense__controls">
                  <div className="new-expense__control"> 
                   <label>Title</label>
                   <input type='text'
                    onChange={titleChangehandler}
                    value={entertitle}
                    ></input>
                  </div>
                  <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' 
                    onChange={amountchangehandler}
                    value={enterAmount}
                    ></input>
                  </div>
                  <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date'
                     min="2019-01-01"
                     max='2023-12-31'
                     onChange={datechangehandler} 
                     value={enterDate}
                     >

                      </input>
                  </div>
                 </div>
                 <div className="new-expense__actions">
                    <button type='submit'>Add Expenses</button>
                 </div>
            </form>
        
      )
}
export default ExpenseFrom;