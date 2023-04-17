const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current working directory
app.use(express.static(__dirname));

// Route for '/' and '/index.html' URL
app.get(['/', '/index.html'], (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for '/about.html' URL
app.get('/about.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

// Route for '/contact-me.html' URL
app.get('/contact-me.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact-me.html'));
});

// Catch-all route for 404.html
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});