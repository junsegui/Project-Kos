
const INITIAL_STATE={
    order:[],
    loading:false,
    error:null,
}

export const orderReducer=(state=INITIAL_STATE,action)=>{
    const {type,payload}=action;
    switch(type){
        default:
            return state
    }
}