//Create web server

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const comments = require('./comments');
const port = 3000;

