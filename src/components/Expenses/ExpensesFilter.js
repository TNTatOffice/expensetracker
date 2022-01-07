import React from "react";
import "./ExpensesFilter.css";

export default function ExpensesFilter(props) {
  
  const getYearHandler = (event) => {
    // Pass the selected year to expenses
    props.onSelectedYearHandler(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.default} onChange={getYearHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}
