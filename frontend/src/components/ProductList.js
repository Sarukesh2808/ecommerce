// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('https://ecommerce-backend-saw5.onrender.com/api/products');
            setProducts(response.data);
        };
        fetchProducts();
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="text-center">Products</h1>
            <div className="row">
                {products.map(product => (
                    <div className="col-md-4 mb-4" key={product._id}>
                        <div className="card">
                            <img src={product.imageUrl} className="card-img-top" width={250} height={250} alt={product.name} />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">₹{product.price}</p>
                                <Link to={`/product/${product._id}`} className="btn btn-primary">View Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
