const express = require('express');
const app = express();
const port = 3010;
const path = require('path');

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.send("mamikos")
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
