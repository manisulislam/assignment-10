import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';


export const authContext = createContext()
const auth = getAuth(app)

const UserContext = ({children}) => {

    const [user, setUser]= useState({})

    const googleProvider = new GoogleAuthProvider()
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = (proider)=>{
        return signInWithPopup(auth, googleProvider)
    }



    const authInfo ={ user, createUser,  userLogIn, googleSignIn }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default UserContext;