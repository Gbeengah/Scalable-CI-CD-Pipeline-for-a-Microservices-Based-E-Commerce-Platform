const express = require('express');
const app = express();

// Define the root endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the Product Service!');
});

// Define the /products endpoint
app.get('/products', (req, res) => {
    res.json([
        { id: 1, name: "Laptop", price: 999.99 },
        { id: 2, name: "Smartphone", price: 799.99 },
        { id: 3, name: "Tablet", price: 499.99 },
    ]);
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Product service running on port ${PORT}`);
});
