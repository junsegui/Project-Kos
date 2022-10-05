import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./Firebase-config";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendEmailVerification,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { orderStatus } from "../assets/constant";
import { v4 } from "uuid";

//FireStore

const app = initializeApp(firebaseConfig);

export const Firestore = getFirestore(app);

export const CreateUserProfile = async (userAuthenticated) => {
  const userReference = doc(Firestore, `users/${userAuthenticated.uid}`);

  const snapshot = await getDoc(userReference);

  if (!snapshot.exists()) {
    const { name, email, photoURL,displayName,} = userAuthenticated;
    try {
      await setDoc(userReference, {
        name: displayName,
        email,
        photoURL,
        createdAt: new Date(),
        
      });
    } catch (error) {
      console.log(error);
    }
  }

  return snapshot;
};

//Auth

export const auth = getAuth(app);

export const registerUser = async (email, password) => {
  const credentials = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  await sendEmailVerification(credentials.user, {
    url: "http://localhost:3000",
  });

  alert(`Se envió un correo de verificación a ${email}`);
  localStorage.setItem("username", credentials.user);

  return credentials;
};
export const signIn =(email,password)=>signInWithEmailAndPassword(auth,email,password);

export const resetPassword = async (email) => {
  await sendPasswordResetEmail(auth, email, {
    url: "http://127.0.0.1:5173/",
  });
  alert("verification email sended check your email");
};
const providerGoogle = new GoogleAuthProvider();
export const signInGoogle = () => signInWithPopup(auth, providerGoogle);

export const createOrderDocument=async (order)=>{
  const orderReference = doc(Firestore,`orders/users/${order.user}/${order.email}`);
  const snapshot = await getDoc(orderReference);

  if(!snapshot.exists()){
    try{
      await setDoc(orderReference,{
        ...order,
        status:orderStatus.pending,
        createdAt:new Date().toDateString(),
        id:v4()

      })
    }catch(error){
      console.log({error})
    }
   
  }
  return snapshot
}