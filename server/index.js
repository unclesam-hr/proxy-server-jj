const express = require('express');
const parser = require('body-parser');
const path = require('path');
// const cors = require('cors')
const request = require('request');
const app = express();
const port = 3000;
app.use(parser.json());
// app.use(cors())

parser.urlencoded({ extended: true });

app.use(express.static(path.join(__dirname, '../client')));

app.get('/api/product/:id', (req, res) => {
  const id = req.params.id
  const newurl = `http://localhost:3003/api/product/${id}`;
  request(newurl).pipe(res);
});

app.listen(port, () => console.log('Listening on port ', port));