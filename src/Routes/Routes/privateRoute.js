import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from '../../Context/UserContext';

const PrivateRoute = ({children}) => {

    const {user,loading }= useContext(authContext);

    if(loading){
        return <div>loading</div>
    }
    if(user && user.uid){
        return children

    }

   

    return <Navigate to='/login'></Navigate>
    ;
};

export default PrivateRoute;