// Create web server

// Import modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// Use modules
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Create comments array
const comments = [
  {
    name: 'John',
    comment: 'Hello World!'
  },
  {
    name: 'Jack',
    comment: 'Hi, there!'
  }
];

// Get comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Post comments
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comments);
});

// Listen to port
app.listen(3000, () => {
  console.log('Server is running at port 3000...');
});


