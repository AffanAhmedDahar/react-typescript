import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { iState } from "../redux/reducers/bankReducer";
import Transactions from "./Transactions";

const TransactionList = () => {
  const transactions = useSelector((state: RootState) => state.bank);

  return (
    <div>
      <h4>History</h4>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transactions transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
