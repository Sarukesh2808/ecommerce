// src/components/ProductDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await axios.get(`https://ecommerce-backend-saw5.onrender.com/api/products/${id}`);
            setProduct(response.data);
        };
        fetchProduct();
    }, [id]);

    const addToCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Product added to cart!');
    };

    return (
        <div className="container mt-5">
            {product ? (
                <div className="row">
                    <div className="col-md-6">
                        <img src={product.imageUrl} className="img-fluid" alt={product.name} />
                    </div>
                    <div className="col-md-6">
                        <h1>{product.name}</h1>
                        <h3>₹{product.price}</h3>
                        <p>{product.description}</p>
                        <button className="btn btn-primary" onClick={addToCart}>Add to Cart</button>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ProductDetail;
