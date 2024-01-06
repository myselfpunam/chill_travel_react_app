import React, { createContext, useEffect, useState } from 'react';
import app from '../FIrebase/Firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
export const AuthContext = createContext()
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
  const [user,setUser] = useState(null)
  const [loading ,setLoading] = useState(true)

  const userCreate = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  
  const userLogin = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  const userLogout = () => {
    setLoading(true)
    return signOut(auth)
  }

  const userGoogle = () =>{
    setLoading(true)
    return signInWithPopup(auth,provider)
  }

  const profileUpdate = (profile) =>{
    setLoading(true)
    return updateProfile(auth.currentUser , profile)
  }

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
      setLoading(false)
    })
    return () => {unSubscribe()}; 
  },[])
  const authinfo =
  {
    user,
    loading,
    userCreate,
    userLogin,
    userLogout,
    profileUpdate,
    userGoogle
  }
  return (
    <AuthContext.Provider value={authinfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;