
const express = require('express');

const app = express();

// Log the HTTP status code for every request
app.use((req, res, next) => {
    res.on('finish', () => {
        console.log(`${req.method} ${req.originalUrl} - ${res.statusCode}`);
    });

    next();
});

// GET / - Welcome route
app.get('/', (req, res) => {
    res.status(200).send('Welcome to Node.js and Express Server!');
});

// GET /about - Return name and section as JSON
app.get('/about', (req, res) => {
    res.status(200).json({
        name: 'Bajjuri Vinuthna',
        section: 'S-10'
    });
});

// GET /time - Return current date and time
app.get('/time', (req, res) => {
    res.status(200).json({
        currentTime: new Date()
    });
});

// Handle unknown routes
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

// Start the Express server on port 3000
app.listen(3000, () => {
    console.log('Express server running at http://localhost:3000');
});
