import React from 'react'
import AdminLayout from '../Layout/Admin/index' 

const AdminRoute = {
    element:<AdminLayout/>,
    children:[
        // Add all routes here
        {
            path:"/admin",
            element:<h1>Admin</h1>
        }
    ]
}

export default AdminRoute
