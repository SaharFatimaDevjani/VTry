import React from 'react'
import AuthLayout from '../Layout/Auth/index' 
import Login from '../components/auth/Login'
import Signup from '../components/auth/Signup'

const AuthRoute = {
    element:<AuthLayout/>,
    children:[
        {
            path:"/login",
            element:<Login />
        },
        {
            path:"/signup",
            element:<Signup />
        }
    ]
}

export default AuthRoute
