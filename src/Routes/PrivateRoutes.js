import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
 const {user,loading} = useContext(AuthContext)
 const location = useLocation();

 if(loading){
  return <div>loading.......</div>
 }

 if(!user){
   return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
 }
 else{
  return children
 }
  
};

export default PrivateRoutes;