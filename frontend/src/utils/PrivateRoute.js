import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    const adminToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MDc1YmZmNzUzODJlZGM2YjI5Y2RiZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyODU4NDMyMywiZXhwIjoxNzI4NTg3OTIzfQ.ux2-O0xT-rleES4OKsr7BSf51WYbUWVJ5tSWWcJZfKE";
    console.log(token);

    console.log(token===adminToken);
    console.log(token!==adminToken);

    // If no token is found, redirect to login
    if (!token) {
        return <Navigate to="/login" />;
    }

    // Check if user has admin token
    if (token !== adminToken) {
        console.log('hi');
        return <Navigate to="/" />;
    }

    // If token matches admin token, allow access
    return children;
};

export default PrivateRoute;