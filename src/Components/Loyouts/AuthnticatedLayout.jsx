
import { useContext } from 'react'
import { useStateContext } from '../../Context/ContextProvider'
import { Navigate, Outlet } from 'react-router-dom'

function AuthnticatedLayout() {
    const {user, token} = useStateContext();
    console.log('token in default layout',token);
    if(!token){
        console.log('comming here to redirect');
        return <Navigate to='/login' />
    }
  return (
    <div>
        <div>A</div>
        <Outlet />
    </div>
  )
}

export default AuthnticatedLayout