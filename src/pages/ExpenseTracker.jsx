import React from "react";

import { Balance } from "../components/Expence/Balance";
import { IncomeExpenses } from "../components/Expence/IncomeExpenses";
import { TransactionList } from "../components/Expence/TransactionList";
import { AddTransaction } from "../components/Expence/AddTransaction";

import { GlobalProvider } from "../context/GlobalState";

import "./ExpenseTracker.css";
const ExpenseTracker = () => {
  return (
    <GlobalProvider>
      <div className="expense-container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
};

export default ExpenseTracker;
