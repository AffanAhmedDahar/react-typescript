import { ActionType } from "../actionTypes/bankActionTypes";
import { Dispatch } from "redux";
import {Action} from '../actions/bankActions'
import {iState} from '../reducers/bankReducer'


export const addTransaction = (data: iState) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DEPOSIT,
      payload: data,
    });
  };
};
export const withdraw = (id: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.WITHDRAW,
      payload: id,
    });
  };
};
export const bankrupt = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.BANKRUPT,
    });
  };
};
