import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth';


export const authContext = createContext()
const auth = getAuth(app)

const UserContext = ({children}) => {

    const [user, setUser]= useState({})
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }



    const authInfo ={ user, createUser }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default UserContext;