const express = require('express');
const cors = require('cors'); // Add this line
const app = express();
const configRouter = require('./api/endpoint.js');

// Add CORS before other middleware
app.use(cors());  // Add this line

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the router
app.use('/', configRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});