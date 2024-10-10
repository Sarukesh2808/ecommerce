// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const cartCount = JSON.parse(localStorage.getItem('cart'))?.length || 0;

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <a className="navbar-brand" href="/">Grocery Store</a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cart">Cart ({cartCount})</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/signup">Sign Up</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin">Admin Dashboard</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
