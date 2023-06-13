import {useState} from 'react';
const ExpenseFilter = (props) => {
  const dateSelectFun = (event) =>{
    props.onfilterYear(event.target.value)
  }
  return (
    <div>
      <label id="second">Filter</label>
      <select value={props.selected} onChange={dateSelectFun}>
        <option value='2019' >2019</option>
        <option value='2020' >2020</option>
        <option value='2021'>2021</option>
        <option value='1998'>1998</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
