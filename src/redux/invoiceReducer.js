import { combineReducers } from "redux"

export const invoiceReducer= (state= 0, {type, payload}) => {
    switch(type){
        case 'ADD_INVOICE': state.invoices.push(payload); return state;
        default: return state;
    }
}
