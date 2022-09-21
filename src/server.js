'use strict';

const express = require('express');
const { default: ModelManager } = require('sequelize/types/model-manager');
const PORT = process.env.PORT || 3001;
const { db, PeopleModel } = require('./models');

const app = express();

app.post('/people', (req, res, next) => {
  console.log(`req body: ${req.body}`);
  const newPerson = PeopleModel.create(req.body);
  res.status(200).send(newPerson);
});

function start() {
  app.listen(PORT, (req, res) => {
    console.log(`the app is listening on ${PORT}`);
  });
}

module.exports = { app, start };