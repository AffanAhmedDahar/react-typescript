import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";

const Balance = () => {
  const transactions = useSelector((state: RootState) => state.bank);

  const amount = transactions.reduce((acc , val) => acc += val.amount, 0);
  return (
    <div className="balance__container">
      <div className="balance__text">
        <h3>Your Balance</h3>
        <h2>$ {amount}</h2>
      </div>
    </div>
  );
};

export default Balance;
