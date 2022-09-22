import { TOOGGLE_CART } from "./actionBag";


const INITIAL_STATE = {
    items:[],
    visible:false,
    totalCost:0,

}

export const bagReducer =(state=INITIAL_STATE,action)=>{
    const {type,payload}=action;
    switch(type){
        case TOOGGLE_CART:
            return{
                ...state,
                visible: !state.visible,
            }
        default:return state;
    }
}