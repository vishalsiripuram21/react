import ExpenseFilter from "./ExpenseFilter";
import ExpensesItem from "./ExpensesItem";
import { useState } from "react";
import "./ExpressDate.css";
import ExpensesFilteredList from "./ExpensesFilteredList";
export default function Expense(props) {
  const [yearFilter, setYearFilter] = useState("2021");
  const filteredYear = (value) => {
    setYearFilter(value);
  };
  const filteredByYearExp = props.name.filter((expense) => {
    return expense.date.getFullYear().toString() === yearFilter;
  });

  return (
    <div className="myClass">
      <div>
        <ExpenseFilter selected={yearFilter} onfilterYear={filteredYear} />
      </div>
      <ExpensesFilteredList items={filteredByYearExp} />
    </div>
  );
}
