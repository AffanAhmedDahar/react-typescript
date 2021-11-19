import { Action } from "../actions/bankActions";
import { ActionType } from "../actionTypes/bankActionTypes";

export interface iState {
    amount: number;
    text: string;
    id : number
}

const initialState : iState[] = [
    {
      amount: 100,
      text: "salary",
      id : 12345
    },
  ]

const reducer = (state: iState[] = initialState, action: Action) :iState[]  => {
  switch (action.type) {
    case ActionType.DEPOSIT :
    return [action.payload ,...state]
    case ActionType.WITHDRAW :
    return state.filter(data => data.id !== action.payload)
    
    default:
      return state;
  }
};

export default reducer;
