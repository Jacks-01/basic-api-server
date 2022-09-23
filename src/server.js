'use strict';
const express = require('express');
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());



function start() {
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
}

module.exports = { app, start };