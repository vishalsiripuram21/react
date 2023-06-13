import "./ExpressDate.css"
export default function ExpenseDate(props) {
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
 
  return (
    <div className="Top">
      <h3>{months[props.date.getMonth()]}</h3>
      <h3>{props.date.getFullYear()}</h3>
      <h3>{props.date.getDate()}</h3>
    </div>
  );
}
