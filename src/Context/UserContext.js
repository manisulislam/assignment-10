import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';


export const authContext = createContext()
const auth = getAuth(app)

const UserContext = ({children}) => {

    const [user, setUser]= useState({})

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = (proider)=>{
        return signInWithPopup(auth, googleProvider)
    }

    const githubSignIn =(provider)=>{
        return signInWithPopup(auth,githubProvider)
    }



    const authInfo ={ user, createUser,  userLogIn, googleSignIn,githubSignIn }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default UserContext;