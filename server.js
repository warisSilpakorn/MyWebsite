const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')));


app.get('Home', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Home.html'));
});


app.get('Experience', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Experience.html'));
});


app.get('Projects', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Project.html'));
});

app.get('Contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Contact.html'));
});

app.listen(3000, function () {
  console.log('Server listening on port 3000');
});