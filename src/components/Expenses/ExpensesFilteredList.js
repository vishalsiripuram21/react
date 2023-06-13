import ExpensesItem from "./ExpensesItem";
const ExpensesFilteredList = (props) => {
  let elementsCondition = <p id="second">No data found</p>;
  if (props.items.length > 0) {
    elementsCondition = props.items.map((arr, index) => {
      return <ExpensesItem key={arr.id} name={arr} />;
    });
  }
  return elementsCondition;
};

export default ExpensesFilteredList;
