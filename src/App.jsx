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
import { setCurrentUser} from "./Redux/Login/actionLogin";
const onAuthChange = (dispatch, action) => {
  return onAuthStateChanged(auth, async user => {
    if (user) {
      const snapshot = await CreateUserProfile(user);
      dispatch(action({ id: snapshot.id, ...snapshot.data() }));
    } else {
      dispatch(action(null));
    }
  });
};
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsuscribe = onAuthChange(dispatch, setCurrentUser);

    return () => unsuscribe();
  }, [dispatch]);

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
