import{items} from "../../Data/Items"
const INITIAL_STATE = {
    items:items
}

export const itemReducer =(state=INITIAL_STATE,action)=>{
    const {type,payload}=action;
    switch(type){

        default:
            return state
    }
    
}

