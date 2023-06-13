import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpense = (props) => {
  const newData = (enteredData) => {
    const newExpenseData = {
      ...enteredData,
      id: Math.random(),
    };
    console.log(newExpenseData);
    props.addNewExpense(newExpenseData);
    fun()
  };
  const [addExpenseCond, setAddExpenseCond] = useState(false);
  const fun = () => {
    if (!addExpenseCond) {
      setAddExpenseCond(true);
    } else {
      setAddExpenseCond(false);
    }
  };
  return (
    <div>

      {addExpenseCond ? (
        <ExpenseForm
          onSaveNewDate={newData}
          conditionCheck={addExpenseCond}
          func={fun}
        />
      ) : (
        <button onClick={fun}>Add Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
