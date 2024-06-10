// Create a web server that listens on port 3000 and serves the following routes:
// GET /comments - returns a list of comments
// POST /comments - creates a new comment
// GET /comments/:id - returns a single comment with the id
// PUT /comments/:id - updates a single comment with the id
// DELETE /comments/:id - deletes a single comment with the id
// Use an array to store the comments. They should have an id and a body.

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const comments = require('./comments');
const port = 3000;

