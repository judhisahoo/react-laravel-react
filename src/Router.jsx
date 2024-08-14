import {createBrowserRouter} from 'react-router-dom'
import AuthLayout from './Components/Loyouts/AuthnticatedLayout'
import GuestLayout from './Components/Loyouts/GuestLayout'
import CreateItem from './Components/item_manage/CreateItem'
import UpdateItem from './Components/item_manage/UpdateItem'
import ListsItems from './Components/item_manage/ListsItems'
import DeleteItem from './Components/item_manage/DeleteItem'

import Users from './Components/General/Users'
import UserForm from './Components/General/UserForm'
import Login from './Components/General/Login'
import Register from './Components/General/Register'
import Home from './Components/General/Home'

const Router = createBrowserRouter([

{
    path: '/',
    element: <AuthLayout />,
    children: [
        {
            path:'/items/create',
            element: <CreateItem /> 
        },
        {
            path:'/items/:id',
            element:<UpdateItem />
        },
        {
            path:'/users/create',
            element:<UserForm key="userCreate" />
        },
        {
            path:'/users/:id',
            element: <UserForm key="userUpdate" />
        } 
    ]
},
{
    path: '/',
    element: <GuestLayout />,
    children:[
        {
            path:'/home',
            element: <Home />
        },
        {
            path:'/login',
            element: <Login />
        },
        {
            path:'/register',
            element: <Register />
        },
        {
            path: '/users',
            element: <Users />
        },
        {
            path: '/items',
            element:<ListsItems />
        }
    ]
}
]);

export default Router;