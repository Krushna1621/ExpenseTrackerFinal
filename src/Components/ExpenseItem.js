import './ExpenseItem.css';
const ExpenseItem=(props)=>{
    // const expenseDate=new Date(2021,2,28);
    // const expenseTitle='Car Insurance';
    // const expenseAmount='430'
    // const LocationOfExpenditure='Amaravati'
    return(
        <div className='expense-item '>
            <div>{props.date.toISOString()}</div>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            {/* <h2>{LocationOfExpenditure}</h2> */}
        </div>
        <div className='expense-item__price'>${props.amount}</div>
        </div>
         
    )

}
export default ExpenseItem;