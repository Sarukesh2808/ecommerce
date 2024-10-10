// src/components/Cart.js
import React from 'react';

const Cart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalPrice = cart.reduce((total, product) => total + product.price, 0);

    const handleRemoveFromCart = (index) => {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        window.location.reload();
    };

    return (
        <div className="container mt-5">
            <h1>Your Cart</h1>
            <ul className="list-group">
                {cart.map((product, index) => (
                    <li className="list-group-item" key={index}>
                        <h5>{product.name}</h5>
                        <p>Price: ₹{product.price}</p>
                        <button className="btn btn-danger" onClick={() => handleRemoveFromCart(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            <h3>Total Price: ₹{totalPrice}</h3>
            <button className="btn btn-success mt-3">Proceed to Checkout</button>
        </div>
    );
};

export default Cart;
