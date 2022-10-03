import "./App.css";

import { Layout } from "./Components/Layout/Layout";
import { Navbar } from "./Components/Navbar/Navbar";
import { Routes } from "./Components/Routes/Routes";
import { Footer } from "./Components/Footer/Footer";
import {onAuthStateChanged}from "firebase/auth";
import {onSnapshot} from "firebase/firestore"
import { useEffect } from "react";
import { auth, CreateUserProfile } from "./Firebase/fireBaseUtils";
import { useDispatch } from "react-redux";
import { setCurrentUser, setUserNull } from "./Redux/Login/actionLogin";

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    const f = onAuthStateChanged(auth,async user =>{
      const ref = await CreateUserProfile(user);
      onSnapshot(ref,snapshot=>{
        const userData = snapshot.data()
        dispatch(setCurrentUser(userData))
        
      })   
    })
  },[])

  return (
    <>
      <Layout>
        <Navbar />
        <Routes />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
