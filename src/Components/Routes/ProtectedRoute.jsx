import { useContext } from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


export const ProtectedRoute = ({children,})=>{
    const {isLoged} = useSelector(state=>state.login)  
    return isLoged ? children : <Navigate to={"/login"}/>

}