import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
const ExpenseItem=(props)=>{
    // const expenseDate=new Date(2021,2,28);
    // const expenseTitle='Car Insurance';
    // const expenseAmount='430'
    // const LocationOfExpenditure='Amaravati'


    // const month=props.date.toLocaleString('en-US',{month:'long'});
    // const day=props.date.toLocaleString('en-US',{day:'2-digit'});
    // const year=props.date.getFullYear()

    
    return(
        <div className='expense-item '>
            {/* <div>{props.date.toISOString()}</div> */}
            {/* <div>
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            </div> */}
            <ExpenseDate date={props.date}></ExpenseDate>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            {/* <h2>{LocationOfExpenditure}</h2> */}
            <div className='expense-item__price'>${props.amount}</div>
        </div>
        
        </div>
          
    )

}
export default ExpenseItem;