import {initializeApp} from "firebase/app"
import { firebaseConfig } from "./Firebase-config";
import {getAuth,signInWithEmailAndPassword,signInWithPopup,sendEmailVerification,sendPasswordResetEmail,createUserWithEmailAndPassword,GoogleAuthProvider} from "firebase/auth"
import {getFirestore,doc,getDoc,setDoc} from "firebase/firestore"
const app = initializeApp(firebaseConfig);

export const Firestore = getFirestore(app);
export const createUserProfile = async userAuntenticated=>{
    const ref = doc(Firestore,`users/${userAuntenticated.uid}`);
    const snapshot = await getDoc(ref);
    if(!snapshot.exists()){
        const {name,email,photoURL} = userAuntenticated
        try{
            await setDoc(ref,{
                name,
                email,
                photoURL,
                createdAT:new Date()
            })
        }catch(error){
           console.log(error) 
        }
    }
    return ref;
}

export const auth = getAuth(app);


export const registerUser = async (email,password)=>{
    const credentials = await createUserWithEmailAndPassword(auth,email,password);
    await sendEmailVerification(credentials.user,{//aca es donde te redirige desp de crear el user
    });
    alert("verification email sended check your email");
    localStorage.setItem(credentials.user);
}
export const signIn =(email,password)=>signInWithEmailAndPassword(auth,email,password)
export const resetPassword = async (email)=>{
    await sendPasswordResetEmail(auth,email,{});
    alert("verification email sended check your email");
}
const providerGoogle = new GoogleAuthProvider();
export const signInGoogle =()=>signInWithPopup(auth,providerGoogle);