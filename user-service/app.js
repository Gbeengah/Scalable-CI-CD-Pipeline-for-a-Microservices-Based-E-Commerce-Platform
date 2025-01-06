const express = require('express');
const app = express();

// Define the root endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the User Service!');
});

// Define the /users endpoint
app.get('/users', (req, res) => {
    res.json([
        { id: 1, name: "Alice", email: "alice@example.com" },
        { id: 2, name: "Bob", email: "bob@example.com" },
        { id: 3, name: "Charlie", email: "charlie@example.com" },
    ]);
});

// Start the server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
    console.log(`User service running on port ${PORT}`);
});
