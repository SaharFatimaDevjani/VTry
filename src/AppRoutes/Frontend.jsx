import React from 'react'
import FrontendLayout from '../Layout/Frontend/index' 

const FrontendRoute = {
    element:<FrontendLayout/>,
    children:[
        {
            path:"/",
            element:<h1>Home</h1>
        }
    ]
        
    }

export default FrontendRoute
