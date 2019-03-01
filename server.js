const express = require('express');
const app = express();
const path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + './gis_programming_workshop/index.html'));
});
