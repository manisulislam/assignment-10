import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';


export const authContext = createContext()
const auth = getAuth(app)

const UserContext = ({children}) => {

    const [user, setUser]= useState({})
    const [loading, setLoading] = useState(true);

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

    useEffect(()=>{
        const  unSubsCribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setUser(false)
        })
        return ()=>{
            unSubsCribe()
        }
    },[])



    const authInfo ={ user,loading,  createUser,  userLogIn, googleSignIn,githubSignIn }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default UserContext;