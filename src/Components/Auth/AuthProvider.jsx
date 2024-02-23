import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firebase/Firebase.config';
import axios from 'axios';

export const AuthContext=createContext(null)
 
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser]=useState([])

    const [loading,setloading]=useState(true)

    

    const provider = new GoogleAuthProvider();
    const updateUserProfile=(name,photo)=>{
       return updateProfile(auth.currentUser, {
            displayName:name, photoURL:photo
          })
    }

    const googleSingIn=()=>{
        return signInWithPopup(auth,provider)
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

            if(currentUser){
                const usersInfo={
                    email:currentUser.email
                }

                axios.post('https://mistro-boss-server.vercel.app/jwt',usersInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access token',res.data.token)
                    }
                })
            }else{
                localStorage.removeItem('access token')
            }
        
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
        updateUserProfile,
        googleSingIn
    }
   
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;