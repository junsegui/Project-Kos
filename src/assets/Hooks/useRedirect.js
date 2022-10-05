import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export const useRedirect=(path)=>{
    const {user} = useSelector(state=>state.login);
    const navigate = useNavigate();
    useEffect(()=>{
        if(user){
            navigate(path)
        }
    },[user,navigate,path])
}
