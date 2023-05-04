import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
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

    // git hub login system
    const githubProvider = new GithubAuthProvider();
    const createUserWithGithub = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    // create user with email and password
    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }

    // login user with email and password
    const loggedInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }

    
    // logout user
    const logOut =()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscriber = onAuthStateChanged(auth, loggedUser=>{
            setUser(loggedUser)
            setLoading(false)
        })
        return () =>{
            unSubscriber()
        }
    },[])

    const authInfo = {
        user,
        setUser,
        createUserWithGoogle,
        createUserWithGithub,
        createUser,
        loggedInUser,
        logOut,
        loading
    }


    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;