import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
export default function NewExpense(props) {

    // Trigger add expense form on button click
    const [isEditing, setIsEditing] = useState(false);
    const openForm = () => {
      setIsEditing(true);
    };
  
    // cancel new expense and close form
    const closeForm = () => {
      setIsEditing(false);
    };
  
  // Move data from child to parent (get expense from form to expense)
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenseHandler(expenseData);
    setIsEditing(false);
  };


  return (
    <div className="new-expense">
      {!isEditing && <button onClick={openForm}> Add New Expense </button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={SaveExpenseDataHandler}
          closeForm={closeForm}
        />
      )}
    </div>
  );
}
