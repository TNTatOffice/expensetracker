import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const defaultExpenses = [
  {
    id: 1,
    title: "Car Insurance",
    amount: 300,
    date: new Date(2020, 3, 12),
  },
  {
    id: 2,
    title: "Macbook Pro",
    amount: 1000,
    date: new Date(2020, 5, 15),
  },
  {
    id: 3,
    title: "IPad Pro",
    amount: 700,
    date: new Date(2020, 8, 17),
  },
  {
    id: 4,
    title: "Car",
    amount: 150000,
    date: new Date(2021, 6, 19),
  },
];

export default function App() {
  // Get default expenses in default state
  const [expenses, setExpenses] = useState(defaultExpenses);

  // get user added expense
  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpenseHandler={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}