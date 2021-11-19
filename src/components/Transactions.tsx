import React from "react";
import { useDispatch } from "react-redux";
import { withdraw } from "../redux/actionCreators";

interface iProps {
  transaction: {
    amount: number;
    text: string;
    id : number
  };
}

const Transactions: React.FC<iProps> = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
const dispatch = useDispatch()

  const deletHandler = (id : number) => {
         dispatch(withdraw(id))
  }

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {" "}
      {transaction.text}{" "}
      <span>
        {" "}
        {sign} $ {Math.abs(transaction.amount)}{" "}
      </span>
      <button
        onClick = {()=> deletHandler(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

export default Transactions;
