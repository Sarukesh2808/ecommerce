const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error.message); // Log error
        res.status(500).json({ message: 'Error fetching products', error: error.message });
    }
});

// Get a product by ID
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        console.error('Error fetching product:', error.message); // Log error
        res.status(500).json({ message: 'Error fetching product', error: error.message });
    }
});

// Add a new product (admin only)
router.post('/', async (req, res) => {
    const { name, price, stock, description, imageUrl } = req.body;

    // Check if all required fields are provided
    if (!name || !price || !stock || !description || !imageUrl) {
        return res.status(400).json({ message: 'Please provide all required fields' });
    }

    try {
        const newProduct = new Product({ name, price, stock, description, imageUrl });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        console.error('Error adding product:', error.message); // Log error
        res.status(500).json({ message: 'Error adding product', error: error.message });
    }
});

// Update product stock (admin only)
router.put('/:id', async (req, res) => {
    const { stock } = req.body;

    if (stock === undefined) {
        return res.status(400).json({ message: 'Please provide the stock value' });
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, { stock }, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(updatedProduct);
    } catch (error) {
        console.error('Error updating product:', error.message); // Log error
        res.status(500).json({ message: 'Error updating product', error: error.message });
    }
});

// Delete product (admin only)
router.delete('/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error deleting product:', error.message); // Log error
        res.status(500).json({ message: 'Error deleting product', error: error.message });
    }
});

module.exports = router;
