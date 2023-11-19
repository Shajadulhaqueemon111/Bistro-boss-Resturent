import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from '../firebase/Firebase.config';
export const AuthContext=createContext(null)
 
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser]=useState([])

    const [loading,setloading]=useState(true)
     

    const updateUserProfile=(name,photo)=>{
       return updateProfile(auth.currentUser, {
            displayName:name, photoURL:photo
          })
    }
    const userSingUp=(email,password)=>{
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userSingIn=(email,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const logOut = () => {
      setloading(true)
        return signOut(auth);
    }

    useEffect(()=>{
      const unSubscribe =onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)

            console.log('current user',currentUser)
            setloading(false)
        })
        return()=>{
            return unSubscribe();
        }
    },[])
    const userInfo={
        user,
        loading,
        userSingUp,
        userSingIn,
        logOut,
        updateUserProfile
    }
   
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;