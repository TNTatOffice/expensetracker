import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

export default function ExpenseItem(props) {
  return (
    <li>
    <Card className="expense-item">
      {/* Pass date from app.js to this component to expense date component */}
      <ExpenseDate date={props.date} />
      {/* Print expense title and price */}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">
          <p>${props.amount}</p>
        </div>
      </div>
    </Card>
    </li>
  );
}
