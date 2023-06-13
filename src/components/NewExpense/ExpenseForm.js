import { useState } from "react";
const ExpenseForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  // const [userInput,setUserInput] = useState({
  //   name:'',
  //   date:'',
  //   amount:''
  // })

  const nameFunction = (event) => {
    setEnteredName(event.target.value);
    // setUserInput(
    //   {
    //     ...userInput,
    //     name: event.target.value
    //   }
    // )
    // setUserInput((prevState) =>{
    //   return {...prevState,name:event.target.value};
    // })
  };

  const dateFunction = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput(
    //   {
    //     ...userInput,
    //     date: event.target.value
    //   }
    // )
    // setUserInput((prevState) =>{
    //   return {...prevState,date:event.target.value}
    // })
  };

  const amountFunction = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput(
    //   {
    //     ...userInput,
    //     amount: event.target.value
    //   }
    // )
    // setUserInput((prevState) =>{
    //   return {...prevState,amount:event.target.value}
    // })
  };
  const formSubmission = (event) => {
    // console.log("submitted")
    event.preventDefault();
    const expenseData = {
      name: enteredName,
      date: new Date(enteredDate),
      price: enteredAmount,
    };
    console.log(expenseData);
    props.onSaveNewDate(expenseData);
    setEnteredName("");
    setEnteredDate("");
    setEnteredAmount("");
  };

  return (
    <div>
      <div>
        <form onSubmit={formSubmission}>
          <div>
            <label>Title</label>
            <input type="text" value={enteredName} onChange={nameFunction} />
          </div>
          <div>
            <label>Date</label>
            <input
              type="date"
              min="1998-06-21"
              max="2000-06-21"
              value={enteredDate}
              onChange={dateFunction}
            />
          </div>
          <div>
            <label>Amount</label>
            <input
              type="number"
              min="1000"
              max="2000"
              value={enteredAmount}
              onChange={amountFunction}
            />
          </div>
          <button type="submit">Add Expense</button>
          <button type="button" onClick={props.func}>Cancel</button>
        </form>
      </div>
    </div>
  );
};
export default ExpenseForm;
