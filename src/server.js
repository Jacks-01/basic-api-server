'use strict';
const express = require('express');
const { db, CatModel, HatModel} = require('./models/');


const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());

//import  middleware and error handlers
const catRouter = require('./routes/cats');
const notFound = require('./error-handlers/404');
const serverError = require('./error-handlers/500');


app.use(catRouter);

function start() {
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
}

module.exports = { app, start };