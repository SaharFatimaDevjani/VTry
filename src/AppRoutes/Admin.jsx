import React from 'react'
import DashboardLayout from '../Layout/Admin/Dashboard'
import ProtectedRoute from '../components/auth/ProtectedRoute'

import Products from '../pages/Admin/product'
import Users from '../pages/Admin/users'

const AdminRoute = {
    element: (
        <ProtectedRoute>
            <DashboardLayout />
        </ProtectedRoute>
    ),
    children: [
        {
            path: "/admin",
            element: <Products />
        },
        {
            path: "/admin/products",
            element: <Products />
        },
        {
            path: "/admin/users",
            element: <Users />
        }
    ]
}

export default AdminRoute