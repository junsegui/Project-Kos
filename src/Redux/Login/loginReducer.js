import { SET_USER, SET_USER_NULL } from "./actionLogin";


const INITIAL_STATE = {
    isLoged:false,
    user:null,
}
export const loginReducer =(state=INITIAL_STATE,action)=>{
    const {type,payload} = action;
    switch(type){
        case SET_USER:
            return {
                ...state,
                user:payload,
            }
            case SET_USER_NULL:
                return {
                    ...state,
                    user:state.user=null
                }
        default:
            return state
    }
}