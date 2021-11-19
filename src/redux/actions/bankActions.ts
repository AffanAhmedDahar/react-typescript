import { ActionType } from '../actionTypes/bankActionTypes'
import {iState} from '../reducers/bankReducer'
interface iDeposit {
    type : ActionType.DEPOSIT,
    payload : iState
}
interface iWithdraw {
    type : ActionType.WITHDRAW,
    payload : number
}
interface iBankrupt {
    type : ActionType.BANKRUPT,
}

export type Action = iDeposit | iBankrupt | iWithdraw