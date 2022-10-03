export const SET_USER = "SET_USER";
export const SET_USER_NULL = "TOGGLE_MENU";

export const setCurrentUser =(user)=>({
    type:SET_USER,
    payload:user,
})

export const setUserNull=()=>({
    type:SET_USER_NULL,
})