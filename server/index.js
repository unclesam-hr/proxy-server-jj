const express = require('express');
const parser = require('body-parser');
const path = require('path');
var cors = require('cors')
const app = express();
const port = 3000;

app.use(parser.json());
app.use(cors())

parser.urlencoded({ extended: true });

app.use(express.static(path.join(__dirname, '../client')));

app.listen(port, () => console.log('Listening on port ', port));