import { RECIEVE_ORDERS, UPDATE_LOCAL_ORDERS } from "./actionOrder";

const INITIAL_STATE={
    order:[],
    loading:false,
    error:null,
}

export const orderReducer=(state=INITIAL_STATE,action)=>{
    const {type,payload}=action;
    switch(type){
        case RECIEVE_ORDERS:
            return{
                ...state,
                order:payload
            }
            case UPDATE_LOCAL_ORDERS:
                return {
                  ...state,
                  order: [...state.order, payload],
                };
        default:
            return state
    }
}