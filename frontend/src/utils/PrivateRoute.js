// src/utils/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token');

    return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
// const PrivateRoute = ({ children }) => {
//     const token = localStorage.getItem('token');

//     if (!token) {
//         return <h2>You must be logged in to view this page</h2>;
//     }

//     return children;
// };
