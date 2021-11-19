import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../redux/actionCreators";

const AddTransaction = () => {
  const [price, setPrice] = useState(0);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      amount: Number(price),
      text: text,
      id : Math.floor(Math.random() *10)
    };

    dispatch(addTransaction(data));
    setPrice(0);
    setText("");
  };
  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>
        <button className='addButton' type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTransaction;
