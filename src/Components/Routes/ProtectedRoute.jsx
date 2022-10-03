import { useContext } from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


export const ProtectedRoute = ({children,})=>{
    const {user,isLogged} = useSelector(state=>state.login)  
    return user != null ? children : <Navigate to={"/login"}/>

}