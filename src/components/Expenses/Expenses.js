import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

export default function Expenses(props) {
  const [year, setYear] = useState("2021");
  const selectedYearHandler = (year) => {
    setYear(year);
  };
  // Filter items by year
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          default={year}
          onSelectedYearHandler={selectedYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
       <ExpensesList expenses={filteredExpenses}/>
      </Card>
    </div>
  );
}
