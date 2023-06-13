import "./ExpensesItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";
function ExpensesItem(props) {
  const [modify, setModify] = useState("");

  const modifyHandler = () => {
    // setModify((prevState) =>{
    //   return {...prevState,}
    // })
    setModify("modified");
    console.log("clicked");
  };

  return (
    <Card className="Expense">
      <Card className="Expense">
        <ExpenseDate date={props.name.date} />
        <h2 id="ExpenseName">{props.name.name}</h2>
      </Card>
      <div id="third">
        <h2>${props.name.price}</h2>

        <button onClick={modifyHandler}>modify</button>
      </div>
    </Card>
  );
}

export default ExpensesItem;
