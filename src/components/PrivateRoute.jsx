import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const role = 0;
    if (role == 0) {
        return <Navigate to="/signin" />
    }
    return (
        { children }
    )
}

export default PrivateRoute