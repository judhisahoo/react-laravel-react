import { useContext } from 'react'
import { useStateContext } from '../../Context/ContextProvider'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

function GuestLayout() {
    const {token} =useStateContext();
    const location = useLocation();
    if(token){
        // here system need to check which routes is calling if calling LOGIN route the redirect to home component
        if (location.pathname === '/login' || location.pathname === '/register') {
            return <Navigate to="/home" replace />;
        }
    }
  return (
    <div>
        <div>G</div>
        <Outlet />
    </div>
  )
}

export default GuestLayout