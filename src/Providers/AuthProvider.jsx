import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


const auth = getAuth(app)
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)


    // create use using google
    const googleProvider = new GoogleAuthProvider();
    const createUserWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut =()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscriber = onAuthStateChanged(auth, loggedUser=>{
            console.log('loggedIn user inside on auth',loggedUser );
            setUser(loggedUser)
            setLoading(false)
        })
        return () =>{
            unSubscriber()
        }
    },[])

    const authInfo = {
        user,
        createUserWithGoogle,
        logOut,
    }


    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;