import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';

const IncomeExpense = () => {
    const transactions = useSelector((state: RootState) => state.bank);

  const income = transactions.filter(val => val.amount > 0).reduce((acc , val) => acc += val.amount, 0);
  const expense = transactions.filter(val => val.amount < 0).reduce((acc , val) => acc += val.amount, 0);
    return (
        <div className="incexp__container">
          <div className="income">
              <h2>Income</h2>
              <p className="money plus">$ {income}</p>

          </div>
          <div className="expense">
          <h2>Expense</h2>
              <p className="money minus">$ {Math.abs(expense)}</p>
          </div>
        </div>
    )
}

export default IncomeExpense
