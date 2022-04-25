import {useContext} from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/autContext';

const PublicRoute = ({children}) => {
  const  {userState} = useContext(AuthContext);
  return  userState.logged ? <Navigate to="/"/> : children
}

export default PublicRoute