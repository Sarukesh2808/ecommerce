import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, adminOnly }) => {
    const token = localStorage.getItem('token');
    const isAdmin = localStorage.getItem('isAdmin') === 'true';  // Get the isAdmin flag

    // If no token is found, redirect to the login page
    if (!token) {
        return <Navigate to="/login" />;
    }

    // If this route is admin-only but the user is not an admin, redirect to home
    if (adminOnly && !isAdmin) {
        return <Navigate to="/" />;
    }

    // If all checks pass, render the children components (protected route)
    return children;
};

export default PrivateRoute;
