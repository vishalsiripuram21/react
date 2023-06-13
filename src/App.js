import { useState } from "react";
import "./App.css";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
const dummy_data = [
  {
    id: "e1",
    name: "Vishal",
    date: new Date(1998, 5, 21),
    price: 5000,
  },
  {
    id:"e2",
    name: "Raju",
    date: new Date(1998, 7, 2),
    price: 10,
  },
  {
    id:"e3",
    name: "Vishal",
    date: new Date(1998, 5, 21),
    price: 5000,
  },
  {
    id:"e4",
    name: "Raju",
    date: new Date(1998, 7, 2),
    price: 10,
  },
];
function App() {
  const [obj, setObj] = useState(dummy_data);
  // const dummy_data = [
  //   {
  //     name: "Vishal",
  //     date: new Date(1998, 5, 21),
  //     price: 5000,
  //   },
  //   {
  //     name: "Raju",
  //     date: new Date(1998, 7, 2),
  //     price: 10,
  //   },
  //   {
  //     name: "Vishal",
  //     date: new Date(1998, 5, 21),
  //     price: 5000,
  //   },
  //   {
  //     name: "Raju",
  //     date: new Date(1998, 7, 2),
  //     price: 10,
  //   },
  // ];
  const newExpense = (newExpenseData) => {
    setObj((prevState) => {
      return [...prevState, newExpenseData];
    });
  };
  return (
    <div>
      <h1>Hi this is React-app</h1>
      <NewExpense addNewExpense={newExpense} />
      <Expense name={obj} />
    </div>
  );
}

export default App;
