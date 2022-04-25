import { useContext }  from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/autContext';



export const PrivateRoute = ({children}) => {

  const  {userState} = useContext(AuthContext);
    
  const params = useLocation();
  
  localStorage.setItem('redirect', params.pathname);
  
  
  
  return userState.logged ? children : <Navigate to="/login"/>
}
